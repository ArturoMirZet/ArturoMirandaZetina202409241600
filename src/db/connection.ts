
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("TEST_202409241505","postgres", "sasa", {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;
