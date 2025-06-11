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

const CardItem = ({ title, description, link }) => {
    const navigate = useNavigate();

    return (
      <Card onClick={() => navigate(`/${link}`)} sx={{ height: '100%' }}>
        <CardActionArea sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

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
            <Typography variant="h5" sx={{ mt: 3, ml: 4 }}>
                Добро пожаловать, {user?.username}!
            </Typography>
            <Container>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                    gap={2}
                    width="100%"
                >
                    {cards.map((card, idx) => (
                        <CardItem
                            key={idx}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                        />
                    ))}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        mt: 5,
                        justifyContent: 'space-between',
                    }}
                >
                    <Card sx={{ height: 300, width: 500, p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Статистика событий
                        </Typography>
                        <ColCharts />
                    </Card>
                    <Card sx={{ height: 300, width: 500, p: 3 }}>
                        <BarCharts />
                    </Card>
                </Box>
            </Container>
        </>
    );
};

export default Dashboard;