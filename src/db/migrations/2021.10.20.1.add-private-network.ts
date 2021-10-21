import { DataTypes, QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';
import { withTransaction } from '../db-utils';

export const up: MigrationFn<QueryInterface> = async ({
  context: sequelize,
}) => {
  await withTransaction(sequelize, async (transaction) => {
    await sequelize.addColumn(
      'file_record',
      'network_id',
      {
        type: DataTypes.STRING,
        allowNull: false,
      },
      {
        transaction,
      },
    );
  });
};

export const down: MigrationFn<QueryInterface> = async ({
  context: sequelize,
}) => {
  await sequelize.removeColumn('file_record', 'network_id');
};
