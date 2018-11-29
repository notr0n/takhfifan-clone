import React, { Component } from 'react';
import {Switch,Route , BrowserRouter} from 'react-router-dom';
import NavBar from './Navbar.js';
import Header from './header.js';
import Paper from '@material-ui/core/Paper';
import {Box , Icon , Text , Button} from 'gestalt';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import DateRange from '@material-ui/icons/DateRange';
import WatchLater from '@material-ui/icons/WatchLater';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Call from '@material-ui/icons/Call';
import LocationOn from '@material-ui/icons/LocationOn';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import Slider0 from './slider.js';
import ReactCountdownClock from 'react-countdown-clock';
import Countdown from './count.js';
import Map from './map.js';

import '../styles/gestalt.css';
import '../styles/bs/css/bootstrap-iso.css';
import '../styles/App.css';

class PRODUCT extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div>
          <NavBar/>
          <Header SRC="http://localhost/uni/p0/banner1.jpg" />
          <div class="hidden-sm hidden-xs">
          <Box height={300}>

          </Box>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

          <Box color="white" height={700}>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="visible-lg visible-md">

                <Box color="darkGray" height={100} marginTop={3} marginBottom={4}>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10" dir="rtl">
                        <div dir="rtl" class="t007">
                            <h4><div class="data00 data11 col-lg-4">
                            <div dir="rtl" class="bootstrap-iso">
                               <div class="hidden-sm hidden-xs">
                               <Box alignItems="center" display="flex">
                                  <Box marginRight={1} padding={1}>
                                     <Icon icon="tag" accessibilityLabel="location" color="white" />
                                  </Box>
                                  <Text align="center" bold color="white">
                                  پارک آبی
                                  </Text>
                              </Box>
                              </div>
                              </div>
                            </div></h4>

                            <h4><div class="data00 data11 col-lg-4">
                            <div dir="rtl" class="bootstrap-iso">
                               <div class="hidden-sm hidden-xs">
                               <Box alignItems="center" display="flex">
                                  <Box marginRight={1} padding={1}>
                                     <Icon icon="tag" accessibilityLabel="location" color="white" />
                                  </Box>
                                  <Text align="center" bold color="white">
                                  OPark
                                  </Text>
                              </Box>
                              </div>
                              </div>
                            </div></h4>

                            <div class="data00 data22 col-lg-4">

                            <div dir="rtl" class="bootstrap-iso">
                               <div class="hidden-sm hidden-xs">
                               <Box alignItems="center" display="flex">
                                  <Box marginRight={1} padding={1}>
                                     <Icon icon="location" accessibilityLabel="location" color="darkGray" />
                                  </Box>
                                  <Text align="center" bold color="darkGray">
                                  کوهک
                                  </Text>
                              </Box>
                              </div>
                              </div>

                            </div>
                        </div>
                        <div dir="rtl" class="a007">
                            اپارک بزرگترین پارک استخری سرپوشیده در خاورمیانه با تفیف 80 درصد
                        </div>
                        <div></div>
                    </div>
                    <div class="col-lg-2 col-md-2 hidden-sm hidden-xs" dir="rtl">
                        <Box color="gray" shape="circle" height={100} width={100} >
                          <Box marginRight={7}>
                            <Icon icon="tag" accessibilityLabel="Pin" color="darkGray" size={40}/>
                            <h3>80%</h3>
                          </Box>
                        </Box>
                    </div>
                </Box>
                  <Slider0/>
                  <br/><br/>
                  <div dir="rtl">
                      <div class="col-lg-2 col-md-2">
                            <Box color="darkGray" >
                                <Button color="transparent" text="همین حالا خرید کنید" />
                            </Box>

                            <Box color="green" marginTop={4}>
                                <Button color="transparent" text="هدیه بدهید" />
                            </Box>
                      </div>
                      <div class="col-lg-7 col-md-7 ">
                            <b><div class="data00 data33">مهلت باقیمانده</div></b>
                            <Countdown date={`${year}-12-24T00:00:00`} />
                      </div>
                      <div class="col-lg-3 col-md-3 " dir="rtl">

                      <Box alignItems="center" display="flex" marginTop={-7}>
                        <Box marginRight={1} paddingX={1}>
                        <Box alignItems="center" display="flex" marginLeft={-5}>
                           <Box marginRight={1} padding={1}>
                              <p class="t000">تومان</p>
                           </Box>
                           <div class="">
                           <h2>
                           10,000
                           </h2>
                           </div>
                       </Box>
                            <p class="off0 b04" >80% تخفیف</p>
                            <center><b><strike>100,000</strike></b></center>
                        </Box>

                      </Box>

                      </div>
                  </div>

                </div>
                <div class="visible-sm visible-xs">
                <Box color="darkGray" height={300} marginTop={3}>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10" dir="rtl">
                        <div dir="rtl" class="t007">
                            <h4><div class="data00 data11 col-lg-4">
                            <div dir="rtl" class="bootstrap-iso">
                               <div class="visible-sm visible-xs">
                               <Box alignItems="center" display="flex">
                                  <Box marginRight={1} padding={1}>
                                     <Icon icon="tag" accessibilityLabel="location" color="white" />
                                  </Box>
                                  <Text align="center" bold color="white">
                                  پارک آبی
                                  </Text>
                              </Box>
                              </div>
                              </div>
                            </div></h4>

                            <h4><div class="data00 data11 col-lg-4">
                            <div dir="rtl" class="bootstrap-iso">
                               <div class="visible-sm visible-xs">
                               <Box alignItems="center" display="flex">
                                  <Box marginRight={1} padding={1}>
                                     <Icon icon="tag" accessibilityLabel="location" color="white" />
                                  </Box>
                                  <Text align="center" bold color="white">
                                  OPark
                                  </Text>
                              </Box>
                              </div>
                              </div>
                            </div></h4>

                            <div class="data00 data22 col-lg-4">

                            <div dir="rtl" class="bootstrap-iso">
                               <div class="visible-sm visible-xs">
                               <Box alignItems="center" display="flex">
                                  <Box marginRight={1} padding={1}>
                                     <Icon icon="location" accessibilityLabel="location" color="darkGray" />
                                  </Box>
                                  <Text align="center" bold color="darkGray">
                                  کوهک
                                  </Text>
                              </Box>
                              </div>
                              </div>

                            </div>
                        </div>
                        <br/><br/>
                        <div dir="rtl" class="a007">
                            اپارک بزرگترین پارک استخری سرپوشیده در خاورمیانه با تفیف 80 درصد
                        </div>
                        <div></div>
                    </div>
                    <div class="col-lg-2 col-md-2 hidden-sm hidden-xs" dir="rtl">
                        <Box color="gray" shape="circle" height={100} width={100} >
                          <Box marginRight={7}>
                            <Icon icon="tag" accessibilityLabel="Pin" color="darkGray" size={40}/>
                            <h3>80%</h3>
                          </Box>
                        </Box>
                    </div>
                </Box>
                </div>
              </div>
          </Box>

          <Box color="white" height={630} marginTop={5}>
                <div class="col-lg-4 col-md-4 hidden-sm hidden-xs">
                  <Box marginTop={4}>
                    <Box color="green" height={175}>
                    </Box>
                    <Box color="olive" height={250}>
                    </Box>
                    <Box color="green" height={175}>
                    </Box>
                  </Box>
                </div>
                <div class="col-lg-8 col-lg-8 col-sm-12 col-xs-12" dir="rtl">
                      <h2>توضیحات</h2>
                      <hr/>
                </div>
          </Box>

          <Box height={400} marginTop={5}>
              <div class="col-lg-6 col-md-6">
                    <Box color="darkGray" height={300}>
                    <Map
                      isMarkerShown
                      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `300px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />
                    </Box>
              </div>
              <div class="col-lg-6 col-md-6" dir="rtl">
                    <Box color="white" height={300}>

                        <br/>
                        <div class="col-lg-8"></div>
                        <div class="col-lg-3">
                          <div class="font0">زمان استفاده :  </div>
                        </div>
                        <div class="col-lg-1">
                          <ListItemIcon>
                            <DateRange/>
                          </ListItemIcon>
                        </div>

                        <br/><br/><br/>
                        <div class="col-lg-8"></div>
                        <div class="col-lg-3">
                          <div class="font0">ساعت سرویس دهی :</div>
                        </div>
                        <div class="col-lg-1">
                          <ListItemIcon>
                            <WatchLater/>
                          </ListItemIcon>
                        </div>

                        <br/><br/><br/>
                        <div class="col-lg-8"></div>
                        <div class="col-lg-3">
                          <div class="font0">روز سرویس دهی :</div>
                        </div>
                        <div class="col-lg-1">
                          <ListItemIcon>
                            <VerifiedUser/>
                          </ListItemIcon>
                        </div>

                        <br/><br/><br/>
                        <div class="col-lg-8"></div>
                        <div class="col-lg-3">
                          <div class="font0">تلفن :</div>
                        </div>
                        <div class="col-lg-1">
                          <ListItemIcon>
                            <Call/>
                          </ListItemIcon>
                        </div>

                        <br/><br/><br/>
                        <div class="col-lg-8"></div>
                        <div class="col-lg-3">
                          <div class="font0">آدرس :</div>
                        </div>
                        <div class="col-lg-1">
                          <ListItemIcon>
                            <LocationOn/>
                          </ListItemIcon>
                        </div>
                    </Box>
              </div>
          </Box>

          <Box color="darkGray" minHeight={300} >
                <div dir="rtl">
                    <Box alignItems="center" display="flex">
                       <Box marginRight={1} padding={1}>
                          <ListItemIcon>
                              <Icon icon="speech" accessibilityLabel="Pin" color="white" />
                          </ListItemIcon>
                       </Box>
                       <Text align="center" bold color="white">
                       نظرات
                       </Text>
                   </Box>
                   <hr/>
                </div>
          </Box>

          </div>
      </div>
    );
  }
}

export default PRODUCT;
