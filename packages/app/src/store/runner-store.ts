import { BaseStore } from '@packages/runner-shared/src/store'

export class MobxRunnerStore extends BaseStore {
  get scale () {
    // TODO(lachlan): Remove this when styling <SnapshotControls />.
    // Should decouple UI style from MobX.
    return 1
  }
}

let mobxRunnerStore: MobxRunnerStore

export function getMobxRunnerStore () {
  if (!mobxRunnerStore) {
    throw Error('mobxRunnerStore is undefined! Need to call initializeMobxStore')
  }

  return mobxRunnerStore
}

export const initializeMobxStore = (testingType: Cypress.TestingType) => {
  mobxRunnerStore = new MobxRunnerStore(testingType)

  return mobxRunnerStore
}