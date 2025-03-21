import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=612x612&w=0&k=20&c=wp60t_1SUG9qDTxzAJwvfZYlLVAiu9r737F_nvtOSPA=";
    const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1674684222755-98a35d94cdfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {info.city}{
                info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
             }
            </Typography>
            <Typography variant="body2" color='text.secondary'component={"span"} >
            <p> Temperature = {info.temp}&deg;C</p>
            <p> Humidity = {info.humidity}</p>
            <p> Min Temperature = {info.tempMin}&deg;C</p>
            <p> Max Temperature = {info.tempMax}&deg;C</p>
            <p> The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
            </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}