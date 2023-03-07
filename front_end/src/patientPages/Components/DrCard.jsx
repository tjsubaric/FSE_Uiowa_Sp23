import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CindyChu from '../images/CindyChu.jpg'

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          src = {CindyChu}
          alt="Cindy Chu"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cindy Chu 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Radiology  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
            Schedule Appointment
        </Button>
        <Button size = 'medium' color = 'primary'>
            Learn More
        </Button>
      </CardActions>
    </Card>
  );
}