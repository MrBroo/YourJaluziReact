import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Icon } from "@mui/material";
import MKAvatar from "components/MKAvatar";
import Card from "@mui/material/Card";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes";
import MKBox from "../../../components/MKBox";
import bgImage from "../../../assets/images/vertical-blinds.jpg";
import logo from "../../../assets/images/photo1652896452.jpeg";
import MKTypography from "../../../components/MKTypography";
import Contact from "../sections/Contact";
// eslint-disable-next-line import/no-cycle
import CenteredFooter from "../../../examples/Footers/CenteredFooter/footer";
import MKButton from "../../../components/MKButton";
import MKSocialButton from "../../../components/MKSocialButton";
import Breadcrumbs from "../../../examples/Breadcrumbs";

function AboutUsPage() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent relative />
      <MKBox
        minHeight="20rem"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.7),
              rgba(gradients.dark.state, 0.7)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={9} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Биз ҳақимизда
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent="center" mx="auto">
            <Breadcrumbs
              routes={[{ label: "Бош саҳифа", route: "/presentation" }, { label: "Жалюзилар" }]}
            />
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -5,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox component="section" pt={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
          <Container>
            <Grid container item xs={12} justifyContent="center" mx="auto">
              <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
                <MKAvatar src={logo} alt="Oson Jaluzi" size="xxl" shadow="xl" />
              </MKBox>
              <Grid container justifyContent="center" py={6}>
                <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
                  <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <MKTypography variant="h3">OsonJaluzi</MKTypography>
                    <MKButton
                      component="a"
                      target="_blank"
                      href="https://taplink.cc/osonjaluzi"
                      variant="outlined"
                      color="black"
                      size="small"
                    >
                      Обуна
                    </MKButton>
                  </MKBox>
                  <Grid container spacing={3} mb={3} sx={12}>
                    <Grid item>
                      <MKTypography component="span" variant="body2" fontWeight="bold">
                        10&nbsp;
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        Пост
                      </MKTypography>
                    </Grid>
                    <Grid item>
                      <MKTypography component="span" variant="body2" fontWeight="bold">
                        1000&nbsp;
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        Обуна
                      </MKTypography>
                    </Grid>
                    <Grid item>
                      <MKTypography component="span" variant="body2" fontWeight="bold">
                        99&nbsp;
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        Обуна
                      </MKTypography>
                    </Grid>
                  </Grid>
                  <MKTypography variant="body1" fontWeight="light" color="text">
                    Осон жалюзи сизга тез ва сифатли ҳизмат кўрсатишни таклиф этади <br />
                    биз жалюзиларга 1 йил кафолат берамиз ва бепулга ўрнатамиз. <br />
                    Араг жалюзи 24 соат ичида уйингизда бўлмаса мутлақо бепул. <br />
                    Бизда 1ой муддатга фоизсиз 50/50 бўлиб тўлашингиз мумкин <br />
                    Яна пенсионерларга 20% чегирма мавжуд. <br />
                    <MKTypography
                      component="a"
                      target="_blank"
                      href="https://taplink.cc/osonjaluzi"
                      variant="body1"
                      fontWeight="light"
                      color="black"
                      mt={3}
                      sx={{
                        width: "max-content",
                        display: "flex",
                        alignItems: "center",

                        "& .material-icons-round": {
                          transform: `translateX(3px)`,
                          transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                        },

                        "&:hover .material-icons-round, &:focus .material-icons-round": {
                          transform: `translateX(6px)`,
                        },
                      }}
                    >
                      Биз ҳақимизда кўпроқ<Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                    </MKTypography>
                  </MKTypography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        <Container>
          <Contact />
        </Container>
        <MKBox pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Бизни онлайн кузатинг!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  Ижтимоий тармоқлар
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://t.me/osonjaluzi"
                  target="_blank"
                  color="twitter"
                  sx={{ m: 1 }}
                >
                  <i className="fab fa-telegram" />
                  &nbsp;Телеграм
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/Oson-Jaluzi-106546972064507/"
                  target="_blank"
                  color="facebook"
                  sx={{ m: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Фесебоок
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.instagram.com/osonjaluzi/"
                  target="_blank"
                  color="pinterest"
                  sx={{ m: 1 }}
                >
                  <i className="fab fa-instagram" />
                  &nbsp;Инстаграм
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox mt={3}>
        <CenteredFooter />
      </MKBox>
    </>
  );
}
export default AboutUsPage;
