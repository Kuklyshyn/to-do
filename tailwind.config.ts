module.exports = {
  theme: {
    backgroundColor: (theme: any) => ({
      ...theme("colors"),
      basewhite: "#FFFFFF",
      baseblack: "#000000",
      lightgray1: "#F5F5F5",
      lightgray2: "#F6F6F6",
      gray1: "#F6F6F6",
      gray2: "#AAAAAA",
      graydark: "#4F4F4F",
      basered: "#FF1500",
      baseblue: "#6CCEFF",
      basegreen: "#B8FF47",
      baseorange: "#FF5900",
      purple: "#5500FF",
    }),
  },
};
