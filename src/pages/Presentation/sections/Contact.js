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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/qwq.jpg";
import axios from "axios";
import { useState } from "react";
import MKAlert from "../../../components/MKAlert";

function Contact() {
  const [text, setText] = useState([]);
  const telegramBotId = "5487892061:AAGh_LBAGm_1GVk93Ph9S9lb2UNBPeJ_x_g";
  const chatId = -583715349;
  let message;
  let messagee;
  let number;
  let name;
  // eslint-disable-next-line func-names
  const ready = function () {
    name = document.getElementById("name").value;
    number = document.getElementById("number").value;
    message = document.getElementById("message").value;
    if (name === null || message === null || number.length < 9) {
      setText(
        <Grid item xs={12}>
          <MKAlert color="info" dismissible>
            Илтимос маълумотларни тўғри тўлдиринг!
          </MKAlert>
        </Grid>
      );
    } else {
      messagee = `Ism: ${name}\nTelefon: ${number}\nMurojaat:${message}`;
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
          text: messagee,
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
              <MKAlert color="info" dismissible>
                Мурожаатингиз қабул қилинди!
              </MKAlert>
            </Grid>
          );
        }
      })
      .catch((error) => {
        if (!error.response)
          setText(
            <Grid item xs={12}>
              <MKAlert color="info" dismissible>
                Илтимос маълумотларни қайта текширинг!
              </MKAlert>
            </Grid>
          );
      });
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("message").value = "";
    return false;
  };

  return (
    <>
      <MKBox component="section" pb={{ xs: 0, lg: 6 }} pt={{ xs: 0, lg: 4 }}>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid item container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.7),
                      rgba(gradients.dark.state, 0.7)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Биз билан алоқа
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      Fill up the form and our Team will get back to you within 24 hours.
                    </MKTypography>
                    <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+33) 882 58 52
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        osonjaluzi@gmail.com
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Ўзбекистон, Тошкент
                      </MKTypography>
                    </MKBox>
                    <MKBox mt={3}>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-telegram" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post">
                  {text}
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2">Салом</MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      савол ёки таклифингиз борми?
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput id="name" variant="standard" placeholder="Исм" fullWidth />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          required
                          type="tel"
                          id="number"
                          variant="standard"
                          placeholder="Телефон"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          id="message"
                          variant="standard"
                          placeholder="Таклифингиз"
                          fullWidth
                          multiline
                          rows={6}
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
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </MKBox>
    </>
  );
}

export default Contact;
