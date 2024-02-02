import {
  CurrencyExchange,
  FireExtinguisherRounded,
  Gamepad,
  LocationOn,
  People,
  ShoppingBasket,
} from "@mui/icons-material";

export const services = [
  { name: "Market", icon: <ShoppingBasket />, href: "/market" },
  { name: "FireSide", icon: <FireExtinguisherRounded />, href: "/fireside" },
  { name: "P2P", icon: <CurrencyExchange />, href: "/p2p" },
  { name: "Pi Play", icon: <Gamepad />, href: "/games" },
  { name: "Escrow", icon: <People />, href: "/" },
  { name: "PiFind", icon: <LocationOn />, href: "/" },
];
