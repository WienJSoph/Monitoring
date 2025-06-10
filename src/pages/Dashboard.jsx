import { Container, Box } from "@mui/material";
import { useAuth } from "../Auth";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Header from "./Header";
import { useNavigate } from "react-router-dom";

import BarCharts from "../components/UI/Charts/BarCharts";
import ColCharts from "../components/UI/Charts/ColCharts";
import { Margin } from "@mui/icons-material";


const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const cards = [
        {
            id: 1,
            link: "map",
            title: 'Карта покрытия',
            description: 'Расположение сетевых узлов на географической карте',
        },
        {
            id: 2,
            link: "fiber",
            title: 'Волокна',
            description: 'Мониторинг затухания в волокнах',
        },
        {
            id: 3,
            link: "events",
            title: 'Статистика',
            description: 'Мониторинг событий',
        },
    ];

    return (
        <>
            <Header />
            <Container >
                
                <Typography variant="h5">Добро пожаловать, {user?.username}!</Typography>
                <Box
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
                        gap: 2,
                    }}
                >
                    {cards.map((card, index) => (
                        <Card onClick={() => navigate("/"+card.link)} >
                            <CardActionArea
                                sx={{
                                    height: '100%',
                                    '&[data-active]': {
                                        backgroundColor: 'action.selected',
                                        '&:hover': {
                                            backgroundColor: 'action.selectedHover',
                                        },
                                    },
                                }}
                            >
                                <CardContent sx={{ height: '100%' }}>
                                    <Typography variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}

                </Box>
            </Container>

            <Container sx={{ mt: 3, display: 'flex', flex: 'column', justifyContent: 'space-between' }}>
                <Card sx={{ height: '300px', width: '550px', p: 3 }}>
                    <text>Статистика событий</text>
                    <pre></pre>
                    <ColCharts />
                </Card>
                <Card sx={{ height: '300px', width: '500px', p: 3 }}>
                    <BarCharts />
                </Card>
            </Container>

            <Container>

            </Container>
        </>
    );
};

export default Dashboard;