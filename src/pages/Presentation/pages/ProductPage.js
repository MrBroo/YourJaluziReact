/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// eslint-disable-next-line import/no-cycle
import routes from "routes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import * as React from "react";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import MKAlert from "../../../components/MKAlert";
import MKTypography from "../../../components/MKTypography";
import bgImage from "../../../assets/images/img6-auto_width_700.jpg";
import MKButton from "../../../components/MKButton";
import MKInput from "../../../components/MKInput";
import CenteredFooter from "../../../examples/Footers/CenteredFooter/footer";
import ProductCard from "../cards/ProductCard";

function ProductPage() {
  const [productList, setProductList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      axios
        .get(`http://45.79.22.179:5852/api/yourjaluzi/category/shortProduct/product/${id}`)
        .then((response) => {
          setProductList(response.data.data);
        });
    };
    getProduct();
  }, []);

  const renderData = productList.map(
    // eslint-disable-next-line no-shadow
    ({ imageUrl, name, price, sunProtection, category, color, about }) => (
      <Grid item xs={12} md={12} lg={12} key={name}>
        <ProductCard
          imageUrl={imageUrl}
          title={name}
          price={price}
          sunProtection={sunProtection}
          category={category}
          color={color}
          about={about}
        />
      </Grid>
    )
  );

  function xisoblash() {
    const eni = parseInt(document.getElementById("eni").value, 10);
    const boyi = parseInt(document.getElementById("boyi").value, 10);
    const nechta = parseInt(document.getElementById("nechta").value, 10);

    if (eni >= 100 && boyi >= 100) {
      // eslint-disable-next-line no-multi-assign,no-shadow
      const kvadrat = (document.getElementById("kvadrat").value = (eni * boyi * nechta) / 10000);
      document.getElementById("javob").value = productList.reduce(
        // eslint-disable-next-line no-shadow
        (kvadrat, obj) => kvadrat * obj.price,
        kvadrat
      );
    }
  }

  const [text, setText] = useState([]);
  const telegramBotId = "5487892061:AAGh_LBAGm_1GVk93Ph9S9lb2UNBPeJ_x_g";
  const chatId = -583715349;
  let message;
  let number;
  let name;
  let kvadrat;
  let javob;
  // eslint-disable-next-line func-names
  const ready = function () {
    name = document.getElementById("name").value;
    number = document.getElementById("number").value;
    kvadrat = document.getElementById("kvadrat").value;
    javob = document.getElementById("javob").value;
    // eslint-disable-next-line no-shadow
    const jaluzi = productList.map((product) => product.name);
    if (name === null || number.length < 9) {
      setText(
        <Grid item xs={12}>
          <MKAlert color="info" dismissible sticky>
            Илтимос маълумотларни тўғри тўлдиринг!
          </MKAlert>
        </Grid>
      );
    } else {
      message = `Jaluzi: ${jaluzi}\nIsm: ${name}\nTelefon: ${number}\nKvadrat: ${kvadrat}\nSumma: ${javob}`;
    }
  };

  // eslint-disable-next-line func-names
  const sendtelegram = function () {
    ready();
    axios
      .post(
        `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
        JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
          },
        }
      )
      .then((response) => {
        if (response) {
          setText(
            <Grid item xs={12}>
              <MKAlert color="info" sticky>
                Буюртма қабул қилинди!
              </MKAlert>
            </Grid>
          );
        }
      })
      .catch((error) => {
        if (!error.response)
          setText(
            <Grid item xs={12}>
              <MKAlert color="info" dismissible sticky>
                Cервер билан хатолик қайта уриниб кўринг!
              </MKAlert>
            </Grid>
          );
      });
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    return false;
  };
  return (
    <>
      <DefaultNavbar routes={routes} transparent relative />
      <MKBox
        minHeight="20rem"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
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
              Жалюзилар
            </MKTypography>
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
        <Container>
          <Grid container mt={3} spacing={3}>
            {renderData}
          </Grid>
        </Container>
        <Container>
          <MKBox my={5}>
            <Grid item container justifyContent="space-between">
              <Grid item xs={12} sm={12} md={12} lg={5}>
                <Card>
                  <Grid pt={3} px={3}>
                    <MKInput id="eni" variant="standard" label="Ени" fullWidth />
                  </Grid>
                  <Grid py={3} px={3}>
                    <MKInput id="boyi" variant="standard" label="Бўйи" fullWidth />
                  </Grid>
                  <Grid py={2} px={3}>
                    <FormControl fullWidth>
                      <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Нечта?
                      </InputLabel>
                      <NativeSelect
                        defaultValue={1}
                        inputProps={{
                          name: "age",
                          id: "nechta",
                        }}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                      </NativeSelect>
                    </FormControl>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} lg={6} px={3} py={2}>
                      <MKTypography container color="secondary" variant="h6" fontWeight="light">
                        1 м2
                      </MKTypography>
                      <MKInput
                        id="kvadrat"
                        placeholder="натижа..."
                        disabled
                        ple
                        sx={{ borderRadius: "7px", border: "1px solid #338ded" }}
                      />
                    </Grid>
                    <Grid item xs={6} lg={6} px={3} py={2}>
                      <MKTypography color="secondary" variant="h6" fontWeight="light">
                        сўм
                      </MKTypography>
                      <MKInput
                        id="javob"
                        placeholder="натижа..."
                        disabled
                        sx={{ borderRadius: "7px", border: "1px solid #338ded" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid ml="auto" pb={5} pt={3} pr={3}>
                    <MKButton variant="gradient" onClick={() => xisoblash()} color="info">
                      Ҳисоблаш
                    </MKButton>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6.5} mt={{ xs: 5, sm: 5, md: 5, lg: 0 }}>
                <Card>
                  <MKBox p={2}>
                    <MKBox px={3} py={2}>
                      {text}
                      <MKTypography variant="h2">Буюртма бериш</MKTypography>
                      <MKTypography variant="body1" color="text" fontWeight="light" mb={2}>
                        пастдаги маълумотларни тўлдиринг
                      </MKTypography>
                    </MKBox>
                    <MKBox pt={0.5} pb={3} px={3}>
                      <Grid container>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            id="name"
                            variant="standard"
                            label="Исм"
                            placeholder="Исмингиз..."
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={10.3}>
                          <MKInput
                            id="number"
                            variant="standard"
                            label="Телефон"
                            placeholder="+998..."
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="flex-end"
                        textAlign="right"
                        ml="auto"
                      >
                        <MKButton variant="gradient" onClick={() => sendtelegram()} color="info">
                          Юбориш
                        </MKButton>
                      </Grid>
                    </MKBox>
                  </MKBox>
                </Card>
              </Grid>
            </Grid>
          </MKBox>
        </Container>
      </Card>
      <MKBox mt={3}>
        <CenteredFooter />
      </MKBox>
    </>
  );
}

export default ProductPage;
