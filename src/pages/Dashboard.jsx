import { Container, Box } from "@mui/material";
import { useAuth } from "../Auth";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Header from "./Header";

import BarCharts from "../components/UI/Charts/BarCharts";
import ColCharts from "../components/UI/Charts/ColCharts";


const Dashboard = () => {
    const { user, logout } = useAuth();

    const cards = [
        {
            id: 1,
            title: 'Plants',
            description: 'Plants are essential for all life.',
        },
        {
            id: 2,
            title: 'Animals',
            description: 'Animals are a part of nature.',
        },
        {
            id: 3,
            title: 'Humans',
            description: 'Humans depend on plants and animals for survival.',
        },
    ];

    return (
        <>
            <Header />
            <h2>Добро пожаловать, {user?.username}!</h2>
            <Container >
                <Box
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
                        gap: 2,
                    }}
                >
                    {cards.map((card, index) => (
                        <Card>
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
                <Card sx={{ height: '300px', width: '550px', p: 2 }}>
                    <ColCharts />
                </Card>
                <Card sx={{ height: '300px', width: '500px', p: 2 }}>
                    <BarCharts />
                </Card>
            </Container>

            <Container>

            </Container>
        </>
    );
};

export default Dashboard;