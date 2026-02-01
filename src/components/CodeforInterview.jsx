import { Box, Typography, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = styled(Box)`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: white;
    padding: 40px;
`;

const Content = styled(Box)`
    display: flex;
    align-items: center;
    gap: 50px;
    max-width: 1100px;
    width: 100%;
    flex-wrap: wrap;
`;

const TextSection = styled(Box)`
    flex: 1;
`;

const Image = styled('img')({
    width: '420px',
    maxWidth: '100%',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
});

const ButtonGroup = styled(Box)`
    margin-top: 30px;
    display: flex;
    gap: 20px;
`;

const CodeForInterview = () => {
    return (
        <Hero>
            <Content>
                <TextSection>
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        CRUD Application
                    </Typography>

                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                        A simple React CRUD project using
                        <b> React, Material UI, JSON Server & REST APIs</b>.
                        Perfect for interviews and practice.
                    </Typography>

                    <ButtonGroup>
                        <Button
                            component={Link}
                            to="/add"
                            variant="contained"
                            size="large"
                        >
                            Add User
                        </Button>

                        <Button
                            component={Link}
                            to="/all"
                            variant="outlined"
                            size="large"
                            sx={{ color: '#fff', borderColor: '#fff' }}
                        >
                            View Users
                        </Button>
                    </ButtonGroup>
                </TextSection>

                <Image src="/instatele.jpeg" alt="CRUD Illustration" />
            </Content>
        </Hero>
    );
};

export default CodeForInterview;
