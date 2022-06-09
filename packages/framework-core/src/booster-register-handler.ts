import {
  BoosterConfig,
  Register,
  Instance,
  EventInterface,
  EventEnvelope,
  NotFoundError,
} from '@boostercloud/framework-types'
import { BoosterEntityMigrated } from './core-concepts/data-migration/events/booster-entity-migrated'

export class RegisterHandler {
  public static async handle(config: BoosterConfig, register: Register): Promise<void> {
    if (register.eventList.length == 0) {
      return
    }
    return config.provider.events.store(
      register.eventList.map(RegisterHandler.wrapEvent.bind(null, register, config)),
      config
    )
  }

  private static wrapEvent(register: Register, config: BoosterConfig, event: Instance & EventInterface): EventEnvelope {
    const eventTypeName = event.constructor.name
    const entityTypeName = RegisterHandler.getEntityTypeName(eventTypeName, event, config)
    if (!entityTypeName) {
      throw new NotFoundError(
        `Couldn't find information about event ${eventTypeName}. Is the event handled by an entity?`
      )
    }
    if (!event.entityID || !event.entityID()) {
      throw new Error(
        `Event ${eventTypeName} has an empty 'entityID' or the required 'entityID' method was not implemented. Make sure to return a string-compatible value identifying the entity this event belongs to.`
      )
    }

    return {
      version: config.currentVersionFor(eventTypeName),
      kind: 'event',
      entityID: event.entityID(),
      requestID: register.requestID,
      currentUser: register.currentUser,
      entityTypeName: entityTypeName,
      typeName: eventTypeName,
      value: event,
      createdAt: new Date().toISOString(), // TODO: This could be overridden by the provider. We should not set it. Ensure all providers set it
    }
  }

  private static getEntityTypeName(
    eventTypeName: string,
    event: Instance & EventInterface,
    config: BoosterConfig
  ): string {
    if (eventTypeName === BoosterEntityMigrated.name) {
      return (event as BoosterEntityMigrated).entityName
    }
    const reducerInfo = config.reducers[eventTypeName]
    return reducerInfo.class.name
  }
}
