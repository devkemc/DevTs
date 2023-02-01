import { IEntity } from '../../Model/IEntity'

export interface ICrudService {
  save: (entity: IEntity) => any
  findAll: () => Array<IEntity>
  findOne: (entity: IEntity) => IEntity
  edit: (entity: IEntity) => any
  delete: (entity: IEntity) => void
}
