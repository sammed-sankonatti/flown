import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import WidgetWrapper from "../components/WidgetWrapper";


const advertisements = [
  {
    image : "https://c4.wallpaperflare.com/wallpaper/781/238/330/airbus-qatar-airways-chassis-a-passenger-plane-airbus-a350-xwb-hd-wallpaper-preview.jpg",
    description : `Qatar Airways currently flies to more than 160 destinations worldwide, connecting through its Doha hub, Hamad International Airport, voted by Skytrax as the 'World's Best Airport' in 2021 and 2022 consecutively.`,
    title : "Qatar Airways",
    website : "quatarairways.com",
  },
  {
    image : "https://www.traditionalgames.in/wp-content/uploads/2023/04/RCB-DP.jpg",
    description : `Royal Challengers Bangalore (RCB) is one of the most popular teams in the Indian Premier League (IPL). With a star-studded lineup and a massive fan following, the team has consistently been a strong contender in every season. `,
    title : "RCB",
    website : "rcb.bangalore.in",
  }
]


const SponsoredAd = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <WidgetWrapper borderRadius= "0rem" sx={{padding : "1.5rem 1.5rem 0.75rem 1.5rem" }} m={isNonMobileScreens ? "1rem 0" : "2rem 0"}>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color="white" sx={{background:"#cfc130", borderRadius:"0.75rem", width:"2rem", height:"2rem", display :"flex", alignItems:"center", justifyContent:"center"}}>Ad</Typography>
      </FlexBetween>
      <Box display="flex" flexDirection="column">
      {
        advertisements.map((advertisement, i)=> (
          <Box key={i} mb="1rem">
            <img
              width="100%"
              height="auto"
              alt="advert"
              src={advertisement.image}
              style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <FlexBetween>
              <Typography color={main}> {advertisement.title} </Typography>
              <Typography color={medium}> {advertisement.website} </Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
              {advertisement.description}
            </Typography>
          </Box>
        ))
      }

      </Box>
    </WidgetWrapper>
  );
};

export default SponsoredAd;
