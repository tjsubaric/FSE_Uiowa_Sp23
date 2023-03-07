import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import JohnHarford from '../images/JohnHarford.jpg'

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          src = {JohnHarford}
          alt="John Hartford"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            John Hartford
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Family Medicine 
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