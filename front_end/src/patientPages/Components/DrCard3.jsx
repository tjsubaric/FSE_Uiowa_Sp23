import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ThomasKelly from '../images/ThomasKelly.jpg'

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          src = {ThomasKelly}
          alt="Thomas Kelly"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Thomas Kelly 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Endocrinology   
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