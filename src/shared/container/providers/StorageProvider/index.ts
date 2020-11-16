import { container } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';

const providers = {
  storage: DiskStorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers.storage,
);
