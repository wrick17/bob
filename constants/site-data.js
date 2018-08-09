import { makeid } from "../utils/admin";

export const getDefaultData = () => {
  return {
    content: {
      home: {
        label: 'Home',
        fields: [
          {
            id: makeid(),
            type: 'heading',
            text: 'Welcome, buy some tickets'
          },
          {
            id: makeid(),
            type: 'paragraph',
            content: 'This is a very long paragraph. The Wintrust Arena, the premiere event space, is a game changer for McCormick Square and tourism in the community. Designed by the internationally-renowned architecture firm Pelli Clarke Pelli, the new building is unique from an architectural standpoint complementing McCormick Place and the surrounding area. The Wintrust Arena is a multi-purpose venue for concerts, sporting events, general session hall for business meetings and conventions as well other major special events. With 10,000 seats and 22 state of the art suites, the Wintrust Arena can accommodate a myriad of events. Featuring a first-class NCAA basketball court that is the new home court for DePaul University Men’s and Women’s basketball teams. The Arena also serves as the home for the WNBA Basketball team the Chicago Sky. Part of a vibrant and walkable urban experience for convention goers, the Wintrust Arena is located in the heart of McCormick Square, making it a prime tourism destination for local residents and visitors alike. The arena serves as a further catalyst for economic development of the historic Motor Row along South Michigan Avenue and other surrounding neighborhoods. The Wintrust Arena is a public-private partnership between the Metropolitan Pier and Exposition Authority (MPEA) and DePaul University',
          }
        ]
      },
      about: {
        label: 'About Us',
        fields: [],
      },
      contact: {
        label: 'Contact Us',
        fields: [],
      }
    }
  }
};