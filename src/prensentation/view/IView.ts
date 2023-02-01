import { IEntity } from '../../Model/IEntity'

export interface IView {
  getEntity: (entityJson: any) => IEntity
  getResponse: (entity:IEntity) => JSON
}
