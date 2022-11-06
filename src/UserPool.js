import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "eu-west-2_vfdG5lDqT",
  ClientId: "1kmk9cu6amitc023fnjec241ub",
};

export default new CognitoUserPool(poolData);
