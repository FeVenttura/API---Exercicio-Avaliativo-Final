    const sequelize = require('sequelize');

    class database {
        constructor() {
            this.init()
        }

    init(){
        this.database = new sequelize(
            'atividadeFinal',
            'root',
            '',
            {
                host: localhost,
                port: 3306,
                dialect: mysql,
            }
        );
    }
    }

module.exports = new database ();