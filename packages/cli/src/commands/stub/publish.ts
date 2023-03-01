import { flags } from '@oclif/command'
import { BaseCommand, CliCommand, Flags } from '../../common/base-command'
import Brand from '../../common/brand'
import { FileGenerator } from 'cli/src/services/file-generator'
import { UserProject } from 'cli/src/services/user-project'
import { Logger } from 'framework-types/dist'

export default class Publish extends BaseCommand<typeof Publish> {
  public static description = 'publish all resource template stubs that are available for customization'

  public static usage = 'boost stub:publish --force'

  public static examples = ['$ boost stub:publish --force', '$ boost stub:publish']

  public static flags = {
    force: flags.boolean({
      char: 'f',
      description: 'Overwrite any existing stub files',
      default: false,
    }),
  }

  implementation = Implementation
}

@CliCommand()
class Implementation {
  constructor(readonly logger: Logger, readonly fileGenerator: FileGenerator, readonly userProject: UserProject) {}

  async run(flags: Flags<typeof Publish>): Promise<void> {
    this.logger.info(`boost ${Brand.energize('stub:publish')} 🗄`)
    await this.userProject.performChecks()
    await this.logger.logProcess('Publishing stubs', () => this.fileGenerator.copyStubs(flags.force))
  }
}
