export const jwtConstants = {
  secret: ((): string => {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      console.log(
        'JWT_SECRET is not defined. Please set it in your environment variables.',
      );
      throw new Error(
        'JWT_SECRET is not defined. Please set it in your environment variables.',
      );
    }

    return secret;
  })(),
};
