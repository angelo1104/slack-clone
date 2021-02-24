import firebaseAdmin from "firebase-admin";
import { GetServerSidePropsContext } from "next-redux-wrapper";
import nookies from "nookies";

if (!firebaseAdmin.apps?.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDNcIuh+lSjJudx\n8nptYhe1xRM0hkZnA+PRf0SBsrGxYq6ksJdeiXSI2rf/2Fih5LK1Yy2021yo6r8a\nb3jl9ZWMuwtsynt6FolHLYWO79JHcX5sxBKavK2ZgjY5w17dgUGwSl1yfi4dHnom\nKQbjZDy58VtBIU/wXzZ6aFG3jifD9mACja2Y7yZKkTlxT0YGJ/zSD6ZzewbMaGaV\ntUgEUAvqU3ERQqTAqhcgysH41KIX2L2976Xnn4aO+lnlnhfQKFwtfXOShp9myOtU\nAkuso7/UnMX8RIjnANeFazmjonc5F/iD538tmQzrGqj1R+/5Arv7Bp3rqSlqaF/6\nt8wjgAVnAgMBAAECggEAJ1k1nW4tlNxIOzZ2xYmiwfF/xrErPeLsWT13mSHpT/D3\nQ1sBex13wRinYm0FOOjtY7md0QStADuKI92S+fSqUrymqQ01TkKPw57P9HsxuvZd\ngSai65lU5NCgYzrs6h8uPj5YHKxXV8N1IOb9x0L1MKYuVNC1F3SdIh/l+vLS4gDw\nKh+im1OK8qun0w4jD5KFMFq/owDUW1j9Nhgw3g9UHpUpu0IqzRt0cuHwdOjX1GyI\nTuj93AecNsYCFN1DgEbN+h7DHa27Qk3Uvhvrl+9deN0169bdalVYkpByf/SbmbSZ\nuYs6vWN0arbSsVEl7iWcKrkYQ761FqA1z3Hr8bV9bQKBgQDsRB+xG85AuoISp6ko\no21cOtFXcOjAOBpSxki9+u3NWdVaoFav6cSpH+NA1mC239J+mJ+ciorZOzdokHTu\nteeS5JJBCDogPDP5q9O32GLX7nYy8crZsdR2N0eTJi4xEtwkqaNI4U7S5hdTAp0p\n6+Y9ZndIFrz8gnDDU0iM6A98IwKBgQDemUkRXPlJCr/bwKp8rIjURconH69cYzA4\nB2Xz3jR3M4ofxerNi0yiVrc+l0aTywT6PAQAPzQj+94XLU2eQc06C/SF5KOAErqS\nEeSIGvYpmEAxrWPD9xE3fQu8lt0EqrtNxvluMk230ZLXqc0krMm6UZmVbLAJMFc2\nMyv/uLaT7QKBgD3AXGwk8VZ3qNGJYqwNcuLdOKPbDepXf4HM82w8LnUympHyQFYA\nCneNrw7eOS7y9whBic4XY8z9LjE1OGq/voPlG9jFdrPAKHGEGHT/qG35lIkiKzuU\nwAwZzKpIG2CWJlWqxNOil8CFhOkcUMmJL4cyxdBgqQpyaViT5u11Jb7zAoGAIEwz\nat6HmQ6DOfphgkdybwJVS4nwYsJNi8OfClxSVn1W7DdGU16D1wYn/l/qsKUDat9s\nYTDKevIfjlNXcL/xbBux9f9vrbSJ94m7E/h9gRmDLvIOiK9/gwKUwl9NYFD5blaR\neGi6GBLDcKFFj622c19FnoWvoRWvgcC5AJinfR0CgYEAxUZU8mtpgwfJiPT5ZUAT\njzVf+0nV7bkwCWG1btIto3QSHQBaUOrOLmZtxvQ4InB/0w0JYiPZO/Jfqou4ZKQc\n2V6XSiWnhBzJ91UUosDZRgWlxG2dCEtHc1fKqTaKC0RCXvqHjCc07oOrpkjdDAb8\nd7PaDjPYUbLtFrDiq1pcJa8=\n-----END PRIVATE KEY-----\n",
      clientEmail:
        "firebase-adminsdk-zb7oj@slack-f1af1.iam.gserviceaccount.com",
      projectId: "slack-f1af1",
    }),
    databaseURL: "https://slack-f1af1.firebaseio.com",
  });
}

const verifyUser = (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = firebaseAdmin.auth().verifyIdToken(cookies["user-token"]);

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { firebaseAdmin, verifyUser };
