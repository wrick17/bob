import { makeid } from "../utils/admin";

export const getDefaultData = () => {
  return {
    content: {
      home: {
        label: 'Home',
        fields: [
          {
            id: makeid(),
            type: 'tickets',
            tickets: '',
          },
        ]
      },
    }
  }
};