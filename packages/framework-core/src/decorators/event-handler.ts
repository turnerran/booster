import { EventInterface, EventHandlerInterface, Class, BoosterConfig } from '@boostercloud/framework-types'
import { BoosterApp } from '../booster-app'

export function EventHandler<TEvent extends EventInterface>(
  event: Class<TEvent>
): <TEventHandler extends EventHandlerInterface>(eventHandlerClass: TEventHandler) => void {
  return (eventHandlerClass) => registerEventHandler(event.name, eventHandlerClass)
}

function registerEventHandler<TEventHandler extends EventHandlerInterface>(
  eventName: string,
  eventHandlerClass: TEventHandler
): void {
  BoosterApp.configureCurrentEnv((config: BoosterConfig): void => {
    const registeredEventHandlers = config.eventHandlers[eventName] || []
    if (registeredEventHandlers.some((klass: EventHandlerInterface) => klass == eventHandlerClass)) {
      return
    }
    registeredEventHandlers.push(eventHandlerClass)
    config.eventHandlers[eventName] = registeredEventHandlers
  })
}
