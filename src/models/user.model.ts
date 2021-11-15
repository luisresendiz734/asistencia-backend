import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sequelize";

interface UserAttributes {
  id: string;
  profile: string;
  firstName: string;
  lastName: string;
  civilState: string;
  age: number;
  children: string;
  house: number;
  phone: string;
  email: string;
  password: string;
  curp: string;
  rfc: string;
  nss: string;
  birthDate: string;
  birthPlace: string;
  address: string;
  nationality: string;
  education: string;
  profesion: string;
  position: string;
  department: string;
  salary: number;
  schedule: string;
  directBoss: string;
  createdAt: string;
  updatedAt: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// We need to declare an interface for our model that is basically what our class would be
interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

const User = sequelize.define<UserInstance>("Users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  profile: {
    type: DataTypes.STRING,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  civilState: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  children: {
    type: DataTypes.INTEGER,
  },
  house: {
    type: DataTypes.INTEGER,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  curp: {
    type: DataTypes.STRING,
  },
  rfc: {
    type: DataTypes.STRING,
  },
  nss: {
    type: DataTypes.STRING,
  },
  birthDate: {
    type: DataTypes.STRING,
  },
  birthPlace: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  nationality: {
    type: DataTypes.STRING,
  },
  education: {
    type: DataTypes.STRING,
  },
  profesion: {
    type: DataTypes.STRING,
  },
  position: {
    type: DataTypes.STRING,
  },
  department: {
    type: DataTypes.STRING,
  },
  salary: {
    type: DataTypes.DOUBLE,
  },
  schedule: {
    type: DataTypes.STRING,
  },
  directBoss: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export const createUserTable = async () => {
  const queryInterface = sequelize.getQueryInterface();
  await queryInterface.createTable("Users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    profile: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    civilState: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    children: {
      type: DataTypes.INTEGER,
    },
    house: {
      type: DataTypes.INTEGER,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    curp: {
      type: DataTypes.STRING,
    },
    rfc: {
      type: DataTypes.STRING,
    },
    nss: {
      type: DataTypes.STRING,
    },
    birthDate: {
      type: DataTypes.STRING,
    },
    birthPlace: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    nationality: {
      type: DataTypes.STRING,
    },
    education: {
      type: DataTypes.STRING,
    },
    profesion: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.STRING,
    },
    department: {
      type: DataTypes.STRING,
    },
    salary: {
      type: DataTypes.DOUBLE,
    },
    schedule: {
      type: DataTypes.STRING,
    },
    directBoss: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  });
};

export default User;
