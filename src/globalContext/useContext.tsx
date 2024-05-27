import { createContext } from "react";


const colorPalletess = [
    {
      id: 0,
      backGorund: "#181b29",
      forGround: "#1c64f5",
      third: "#0e121b",
      text: "#ffffff",
      bgImage: "/images/backgroundIMG.png"
    },
    {
      id: 1,
      backGorund: "#1a3f45",
      forGround: "#5dcbda",
      third: "#275b66",
      text: "#ffffff",
      bgImage: "/images/backgroundIMG.png"
    },
    {
      id: 2,
      backGorund: "#1c1c1c",
      forGround: "#f0b83f",
      third: "#2f2f2f",
      text: "#ffffff",
      bgImage: "/images/backgroundIMG.png"
    },
    {
      id: 3,
      backGorund: "#212121",
      forGround: "#e01826",
      third: "#303030",
      text: "#ffffff",
      bgImage: "/images/backgroundIMG.png"
    },
    {
      id: 4,
      backGorund: "#003b73",
      forGround: "#39cffe",
      third: "#024e8c",
      text: "#ffffff",
      bgImage: "/images/backgroundIMG.png"
    },
    {
      id: 5,
      backGorund: "#2a0878",
      forGround: "#d65efc",
      third: "#451f98",
      text: "#ffffff",
      bgImage: "/images/backgroundIMG.png"
    }
  ]

  export const changeThemeColor = (color: any) => {
    const newTheme = colorPalletess.find((col) => col.id == color)

    const bgColor = newTheme ? newTheme.backGorund : newTheme
  }