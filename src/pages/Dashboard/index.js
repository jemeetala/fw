import React from "react";

import {
  Row,
  Stack,
  Image,
  Column,
  Text,
  Button,
  Input,
  Line,
} from "components";

const DashboardPage = () => {
  return (
    <>
      <Row className="bg-bluegray_51 font-sourcesanspro items-center mx-[auto] w-[100%]">
        <aside className="bg-bluegray_900 h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] lg:pb-[382px] xl:pb-[437px] pb-[492px] 3xl:pb-[590px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
          <Stack className="">
            <Image
              src={"images/img_group92.svg"}
              className="absolute lg:h-[396px] xl:h-[452px] h-[508px] 2xl:h-[509px] 3xl:h-[610px] inset-x-[0] object-contain top-[0] w-[100%]"
              alt="Group92"
            />
          </Stack>
        </aside>
        <Column className="items-center w-[93%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 border border-indigo_50 border-solid items-center justify-between lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
              <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[41%]">
                <Row className="absolute border border-bluegray_201 border-solid items-center justify-start left-[0] lg:pl-[5px] xl:pl-[6px] pl-[7px] 3xl:pl-[8px] lg:pr-[4px] xl:pr-[5px] pr-[6px] 3xl:pr-[7px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[17%]">
                  <Image
                    src={"images/img_searchoutline_1.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="searchOutline"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]">
                    All
                  </Text>
                  <Image
                    src={"images/img_angledownoutl_3.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="angledownOutl"
                  />
                </Row>
                <Text className="absolute border border-bluegray_201 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] right-[0] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[84%]">
                  Search your CRM...
                </Text>
              </Stack>
              <Image
                src={"images/img_frame410.svg"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[376px] xl:ml-[430px] ml-[484px] 3xl:ml-[581px] object-contain w-[22%]"
                alt="Frame410"
              />
            </Row>
          </header>
          <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[614px] xl:pr-[702px] pr-[790px] 3xl:pr-[948px] w-[100%]">
            <Button className="bg-white_A700 border border-indigo_50 border-solid font-normal not-italic lg:pb-[15px] xl:pb-[17px] pb-[19.5px] 2xl:pb-[19px] 3xl:pb-[23px] lg:pt-[14px] xl:pt-[16px] pt-[18.5px] 2xl:pt-[18px] 3xl:pt-[22px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-center w-[35%]">
              Activities Dashboard
            </Button>
            <Button className="border border-gray_200 border-solid font-normal mb-[1px] not-italic lg:py-[14px] xl:py-[16px] py-[18.5px] 2xl:py-[18px] 3xl:py-[22px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 text-center w-[19%]">
              Analytics
            </Button>
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
              WrapClassName="2xl:pb-[19px] 2xl:pt-[18px] 3xl:pb-[23px] 3xl:pl-[19px] 3xl:pr-[24px] 3xl:pt-[22px] border border-gray_200 border-solid flex lg:pb-[15px] lg:pl-[12px] lg:pr-[15px] lg:pt-[14px] pb-[19.5px] pl-[16px] pr-[20px] pt-[18.5px] w-[36%] xl:pb-[17px] xl:pl-[14px] xl:pr-[17px] xl:pt-[16px]"
              name="Group173"
              placeholder="Sales Dashboard"
              suffix={
                <Image
                  src={"images/img_vector_46.svg"}
                  className="w-[16.01px] h-[16.01px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                  alt="Vector"
                />
              }
            ></Input>
            <Image
              src={"images/img_frame418_2.svg"}
              className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] object-contain lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
              alt="Frame418"
            />
          </Row>
          <Row className="items-center justify-evenly lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] w-[100%]">
            <Column className="bg-white_A700 items-start lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] lg:pb-[271px] xl:pb-[310px] pb-[349px] 3xl:pb-[419px] lg:pt-[25px] xl:pt-[29px] pt-[33px] 3xl:pt-[39px] rounded-radius8 w-[66%]">
              <Row className="font-inter items-center justify-between lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[95%]">
                <Text className="font-medium lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]">
                  <span className="text-bluegray_901 font-sourcesanspro font-light">
                    Hey
                  </span>
                  <span className="text-bluegray_901 font-sourcesanspro font-normal">
                    {" "}
                  </span>
                  <span className="text-bluegray_901 font-sourcesanspro font-semibold">
                    Jemee!
                  </span>
                </Text>
                <Row className="font-sourcesanspro items-center justify-evenly lg:ml-[369px] xl:ml-[422px] ml-[475px] 3xl:ml-[570px] w-[31%]">
                  <Row className="bg-gray_51 border border-gray_200 border-solid items-center justify-evenly lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[38%]">
                    <Image
                      src={"images/img_addtask1_1.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="addtask1"
                    />
                    <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                      Add task
                    </Text>
                  </Row>
                  <Input
                    className="bg-transparent border-0 font-normal not-italic p-[0] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                    WrapClassName="2xl:pl-[9px] 2xl:py-[15px] 3xl:pl-[11px] 3xl:py-[18px] bg-gray_51 border border-gray_200 border-solid flex lg:pl-[7px] lg:py-[12px] pb-[15.66px] pl-[9.67px] pr-[0] pt-[15.67px] w-[48%] xl:pl-[8px] xl:py-[13px]"
                    name="Group175"
                    placeholder="Add meeting"
                    prefix={
                      <Image
                        src={"images/img_vector_47.svg"}
                        className="w-[16.67px] h-[16.67px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[20px] 3xl:h-[21px] my-[auto]"
                        alt="Vector"
                      />
                    }
                  ></Input>
                  <Image
                    src={"images/img_frame419_1.svg"}
                    className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] object-contain rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[14%]"
                    alt="Frame419"
                  />
                </Row>
              </Row>
              <Column className="font-sourcesanspro items-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[393px] xl:pr-[450px] pr-[506px] 3xl:pr-[607px] w-[100%]">
                <Row className="items-center justify-start w-[100%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Showing all
                  </Text>
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                    All Activities
                  </Text>
                  <Image
                    src={"images/img_trianglesolid_2.svg"}
                    className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                    alt="triangleSolid"
                  />
                  <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    for
                  </Text>
                  <Row className="items-center justify-evenly ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[29%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                      Today jun 27
                    </Text>
                    <Image
                      src={"images/img_trianglesolid_3.svg"}
                      className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                      alt="triangleSolid"
                    />
                  </Row>
                </Row>
              </Column>
              <Row className="border border-gray_200 border-solid font-sourcesanspro items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                <Row className="items-center justify-between w-[47%]">
                  <Text className="font-normal lg:leading-[17px] xl:leading-[20px] leading-[23.00px] 2xl:leading-[23px] 3xl:leading-[27px] not-italic lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[21%]">
                    Select all
                  </Text>
                  <Row className="items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[16%]">
                    <Image
                      src={"images/img_checkbox_1.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="Checkbox"
                    />
                    <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                      Open
                    </Text>
                  </Row>
                  <Text className="font-normal lg:leading-[17px] xl:leading-[20px] leading-[23.00px] 2xl:leading-[23px] 3xl:leading-[27px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[20%]">
                    Overdue
                  </Text>
                  <Text className="font-normal lg:leading-[17px] xl:leading-[20px] leading-[23.00px] 2xl:leading-[23px] 3xl:leading-[27px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[24%]">
                    Completed
                  </Text>
                </Row>
                <Text className="font-normal lg:ml-[223px] xl:ml-[255px] ml-[287px] 3xl:ml-[344px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]">
                  All tasks and meetings
                </Text>
              </Row>
              <Text className="font-semibold font-sourcesanspro lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]">
                Find your upcoming tasks, meetings and reminders here
              </Text>
              <Row className="font-sourcesanspro items-center justify-start lg:ml-[46px] xl:ml-[53px] ml-[60px] 3xl:ml-[72px] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] w-[86%]">
                <Column className="items-center mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[52%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                    Bring your emails into CRM
                  </Text>
                  <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    Select your email provider
                  </Text>
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <Row className="bg-gray_51 border border-gray_200 border-solid items-center justify-start lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[19%]">
                      <Image
                        src={"images/img_gmailsvg_1.svg"}
                        className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain w-[34%]"
                        alt="Gmailsvg"
                      />
                      <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        Gmail
                      </Text>
                    </Row>
                    <Row className="bg-gray_51 border border-gray_200 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[25%]">
                      <Stack className="lg:h-[16px] xl:h-[19px] h-[20.49px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] w-[24%]">
                        <Stack className="absolute lg:h-[16px] xl:h-[19px] h-[20.49px] 2xl:h-[21px] 3xl:h-[25px] inset-[0] opacity-op2 w-[100%]">
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Column className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] items-center w-[100%]">
                              <Image
                                src={"images/defaultNoData.png"}
                                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] object-cover lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                                alt="Vector"
                              />
                            </Column>
                            <Column className="items-end lg:pl-[3px] pl-[4.74px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] pr-[1.98px] 2xl:pr-[1px] xl:pr-[1px] lg:pr-[1px] 3xl:pr-[2px] w-[100%]">
                              <Image
                                src={"images/img_rectangle_4.png"}
                                className="h-[5.25px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] object-contain w-[100%]"
                                alt="Rectangle"
                              />
                            </Column>
                          </Column>
                          <Image
                            src={"images/img_vector_48.svg"}
                            className="absolute bottom-[5%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-contain right-[13%] w-[61%]"
                            alt="Vector"
                          />
                        </Stack>
                        <Stack className="absolute lg:h-[15px] xl:h-[18px] h-[19.18px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] justify-center m-[auto] w-[76%]">
                          <Stack className="absolute lg:h-[15px] xl:h-[18px] h-[19.18px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] w-[100%]">
                            <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                              <Column className="items-center pr-[1px] w-[100%]">
                                <Stack className="lg:h-[15px] xl:h-[17px] h-[18.82px] 2xl:h-[19px] 3xl:h-[23px] w-[100%]">
                                  <Image
                                    src={"images/img_vector_49.png"}
                                    className="absolute lg:h-[15px] xl:h-[17px] h-[18.75px] 2xl:h-[19px] 3xl:h-[23px] inset-y-[0] my-[auto] object-contain right-[0] w-[45%]"
                                    alt="Vector"
                                  />
                                  <Image
                                    src={"images/img_vector_50.png"}
                                    className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] object-contain top-[0] w-[65%]"
                                    alt="Vector"
                                  />
                                  <Image
                                    src={"images/img_vector_51.png"}
                                    className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] object-contain top-[0] w-[65%]"
                                    alt="Vector"
                                  />
                                </Stack>
                              </Column>
                              <Column className="items-end lg:pl-[1px] pl-[2.53px] 2xl:pl-[2px] xl:pl-[2px] 3xl:pl-[3px] w-[100%]">
                                <Image
                                  src={"images/img_rectangle_5.png"}
                                  className="h-[4.57px] lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] object-contain w-[100%]"
                                  alt="Rectangle"
                                />
                              </Column>
                            </Column>
                            <Image
                              src={"images/img_vector_52.svg"}
                              className="absolute bottom-[1%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-contain right-[1%] w-[81%]"
                              alt="Vector"
                            />
                          </Stack>
                          <Stack className="absolute bottom-[1%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[18%] w-[46%]">
                            <Image
                              src={"images/img_vector_53.png"}
                              className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                              alt="Vector"
                            />
                            <Image
                              src={"images/img_vector_54.png"}
                              className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                              alt="Vector"
                            />
                          </Stack>
                        </Stack>
                      </Stack>
                      <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        Office 365
                      </Text>
                    </Row>
                    <Row className="bg-gray_51 border border-gray_200 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[23%]">
                      <Image
                        src={"images/img_outlooklogo_1.svg"}
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        alt="Outlooklogo"
                      />
                      <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        Outlook
                      </Text>
                    </Row>
                    <Row className="bg-gray_51 border border-gray_200 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[21%]">
                      <Image
                        src={"images/img_mail1_1.png"}
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        alt="mail1"
                      />
                      <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        Others
                      </Text>
                    </Row>
                  </Row>
                </Column>
                <Line className="bg-bluegray_50 h-[1px] lg:ml-[42px] xl:ml-[48px] ml-[54px] 3xl:ml-[64px] rotate-[-90deg] w-[1px]" />
                <Column className="items-start mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[41px] xl:ml-[47px] ml-[53px] 3xl:ml-[63px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[34%]">
                  <Column className="items-start lg:px-[25px] xl:px-[29px] px-[33px] 3xl:px-[39px] w-[100%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                      Bring your emails into CRM
                    </Text>
                  </Column>
                  <Text className="font-normal lg:ml-[38px] xl:ml-[43px] ml-[49px] 3xl:ml-[58px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    Select your email provider
                  </Text>
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <Row className="bg-gray_51 border border-gray_200 border-solid items-center justify-start lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[55%]">
                      <Image
                        src={"images/img_googlecalendar_1.svg"}
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        alt="googlecalendar"
                      />
                      <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        Google Calender
                      </Text>
                    </Row>
                    <Row className="bg-gray_51 border border-gray_200 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[39%]">
                      <Stack className="lg:h-[16px] xl:h-[19px] h-[20.49px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] w-[24%]">
                        <Stack className="absolute lg:h-[16px] xl:h-[19px] h-[20.49px] 2xl:h-[21px] 3xl:h-[25px] inset-[0] opacity-op2 w-[100%]">
                          <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                            <Column className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] items-center w-[100%]">
                              <Image
                                src={"images/defaultNoData.png"}
                                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] object-cover lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                                alt="Vector"
                              />
                            </Column>
                            <Column className="items-end lg:pl-[3px] pl-[4.74px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] pr-[1.99px] 2xl:pr-[1px] xl:pr-[1px] lg:pr-[1px] 3xl:pr-[2px] w-[100%]">
                              <Image
                                src={"images/img_rectangle_6.png"}
                                className="h-[5.25px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] object-contain w-[100%]"
                                alt="Rectangle"
                              />
                            </Column>
                          </Column>
                          <Image
                            src={"images/img_vector_55.svg"}
                            className="absolute bottom-[5%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-contain right-[13%] w-[61%]"
                            alt="Vector"
                          />
                        </Stack>
                        <Stack className="absolute lg:h-[15px] xl:h-[18px] h-[19.18px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] justify-center m-[auto] w-[76%]">
                          <Stack className="absolute lg:h-[15px] xl:h-[18px] h-[19.18px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] w-[100%]">
                            <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                              <Column className="items-center pr-[1px] w-[100%]">
                                <Stack className="lg:h-[15px] xl:h-[17px] h-[18.82px] 2xl:h-[19px] 3xl:h-[23px] w-[100%]">
                                  <Image
                                    src={"images/img_vector_56.png"}
                                    className="absolute lg:h-[15px] xl:h-[17px] h-[18.75px] 2xl:h-[19px] 3xl:h-[23px] inset-y-[0] my-[auto] object-contain right-[0] w-[45%]"
                                    alt="Vector"
                                  />
                                  <Image
                                    src={"images/img_vector_57.png"}
                                    className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] object-contain top-[0] w-[65%]"
                                    alt="Vector"
                                  />
                                  <Image
                                    src={"images/img_vector_58.png"}
                                    className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] object-contain top-[0] w-[65%]"
                                    alt="Vector"
                                  />
                                </Stack>
                              </Column>
                              <Column className="items-end lg:pl-[1px] pl-[2.53px] 2xl:pl-[2px] xl:pl-[2px] 3xl:pl-[3px] w-[100%]">
                                <Image
                                  src={"images/img_rectangle_7.png"}
                                  className="h-[4.57px] lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] object-contain w-[100%]"
                                  alt="Rectangle"
                                />
                              </Column>
                            </Column>
                            <Image
                              src={"images/img_vector_59.svg"}
                              className="absolute bottom-[1%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-contain right-[1%] w-[81%]"
                              alt="Vector"
                            />
                          </Stack>
                          <Stack className="absolute bottom-[1%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[18%] w-[46%]">
                            <Image
                              src={"images/img_vector_60.png"}
                              className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                              alt="Vector"
                            />
                            <Image
                              src={"images/img_vector_61.png"}
                              className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                              alt="Vector"
                            />
                          </Stack>
                        </Stack>
                      </Stack>
                      <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        Office 365
                      </Text>
                    </Row>
                  </Row>
                </Column>
              </Row>
            </Column>
            <Column className="items-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[33%]">
              <Stack className="lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                <Line className="absolute bg-bluegray_400 bottom-[52%] h-[1px] inset-x-[0] top-[48%] w-[100%]" />
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                  WrapClassName="2xl:pl-[17px] 2xl:py-[11px] 3xl:ml-[133px] 3xl:pl-[21px] 3xl:py-[14px] absolute bg-gray_51 border border-gray_200 border-solid flex left-[26%] lg:ml-[86px] lg:pl-[13px] lg:py-[9px] ml-[111px] pb-[11.66px] pl-[17.55px] pr-[0] pt-[11.67px] rounded-radius4 w-[39%] xl:ml-[98px] xl:pl-[15px] xl:py-[10px]"
                  name="Group174"
                  placeholder="Configure widgets"
                  prefix={
                    <Image
                      src={"images/img_vector_62.svg"}
                      className="w-[16.37px] absolute lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px] my-[auto]"
                      alt="Vector"
                    />
                  }
                ></Input>
              </Stack>
              <Column className="bg-white_A700 items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pb-[32px] xl:pb-[37px] pb-[42px] 3xl:pb-[50px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] rounded-radius8 w-[100%]">
                <Row className="items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[196px] xl:pr-[225px] pr-[253px] 3xl:pr-[303px] w-[100%]">
                  <Image
                    src={"images/img_group3_4.svg"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Group3"
                  />
                  <Text className="font-semibold 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                    Freddy AI Insights
                  </Text>
                </Row>
                <Line className="bg-bluegray_50 h-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]" />
                <Text className="font-normal lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                  Freddy doesn’t have any insights for now. But it will soon
                </Text>
              </Column>
              <Stack className="lg:h-[516px] xl:h-[590px] h-[663px] 2xl:h-[664px] 3xl:h-[797px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                <div className="absolute bg-white_A700 lg:h-[516px] xl:h-[590px] h-[663px] 2xl:h-[664px] 3xl:h-[797px] inset-[0] rounded-radius8 w-[100%]"></div>
                <Column className="absolute items-start justify-start top-[2%] w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Row className="items-start justify-between w-[92%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                        My calender
                      </Text>
                      <Image
                        src={"images/img_settingoutline_1.svg"}
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:ml-[234px] xl:ml-[267px] ml-[301px] 3xl:ml-[361px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        alt="settingOutline"
                      />
                    </Row>
                    <Line className="bg-bluegray_50 h-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]" />
                  </Column>
                  <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    Today
                  </Text>
                  <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                    27 Jun
                  </Text>
                  <Column className="items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:px-[14px] xl:px-[16px] px-[18px] 3xl:px-[21px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          08:00
                        </Text>
                        <Input
                          className="bg-transparent border-0 border-b-[1px] border-bluegray_100 border-solid font-normal not-italic p-[0] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-blue_800 text-blue_800 w-[100%]"
                          WrapClassName="2xl:pb-[48px] 2xl:pt-[3px] 3xl:mb-[12px] 3xl:ml-[19px] 3xl:pb-[58px] 3xl:pl-[9px] 3xl:pt-[4px] flex lg:mb-[7px] lg:ml-[12px] lg:pb-[37px] lg:pl-[6px] lg:pt-[2px] mb-[10px] ml-[16px] pb-[48.5px] pl-[8px] pr-[0] pt-[3.5px] w-[88%] xl:mb-[8px] xl:ml-[14px] xl:pb-[43px] xl:pl-[7px] xl:pt-[3px]"
                          name="Group176"
                          placeholder="Show today"
                          prefix={
                            <Image
                              src={"images/img_group_61_1.svg"}
                              className="w-[56px] lg:w-[43px] xl:w-[49px] 3xl:w-[67px] my-[auto]"
                              alt="Group 61"
                            />
                          }
                        ></Input>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
                        <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          09:00
                        </Text>
                        <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                      </Row>
                      <Column className="items-start justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                        <Line className="bg-red_700 h-[1px] lg:ml-[37px] xl:ml-[42px] ml-[48px] 3xl:ml-[57px] w-[88%]" />
                        <Column className="items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              10:00
                            </Text>
                            <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                          </Row>
                        </Column>
                      </Column>
                      <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
                        <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          11:00
                        </Text>
                        <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                      </Row>
                      <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
                        <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          12:00
                        </Text>
                        <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                      </Row>
                      <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
                        <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          13:00
                        </Text>
                        <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                      </Row>
                      <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
                        <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          14:00
                        </Text>
                        <Line className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]" />
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Stack>
            </Column>
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default DashboardPage;
