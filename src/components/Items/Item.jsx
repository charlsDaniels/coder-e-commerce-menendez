import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Item = ({ item }) => {
  return (
    <Box sx={{ width: 300 }}>
      <Card elevation={5} sx={{ borderRadius: 3 }}>
        <CardContent>
          <CardHeader
            title={item.title}
            subheader={item.price}
            sx={{ pt: 0 }}
          />
          <CardMedia
            component="img"
            sx={{ objectFit: "contain" }}
            height="235"
            image={item.pictureUrl}
            alt="Camisa"
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Item;
