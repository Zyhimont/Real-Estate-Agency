import React from 'react';
import './Promises.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaHouseChimney, FaHouseChimneyUser, FaHouseCircleCheck } from "react-icons/fa6";

const Promises = () => {
    return (
        <div className="promises-wrapper">
            <div className="promises-container innerWidth paddings flexCenter">
                <div className="promises-left flexColStart">
                    <span className="primaryText">We offer you the best service</span>
                    <p className="secondaryText">
                        If you’re looking for a new home, an investment property or to explore the area 
                        we’ll help you find exactly what you’re looking for.
                    </p>
                
                    <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={["1"]}>
                        <AccordionItem className="accordionItem" key="1" uuid="1">
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordionButton">
                                    <div className="icon flexCenter"><FaHouseChimney size={20} /></div>
                                    <span className="primaryText">Looking to Buy or Sell a Home?</span>
                                    <div className="icon flexCenter"><MdOutlineArrowDropDown size={20} /></div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="secondaryText">
                                    We’re the most respected company in the industry because we deliver 
                                    extraordinary experiences by defying mediocrity and always giving 
                                    you 121% of what you expect from us.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem className="accordionItem" key="2" uuid="2">
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordionButton">
                                    <div className="icon flexCenter"><FaHouseChimneyUser size={20} /></div>
                                    <span className="primaryText">Professional agents</span>
                                    <div className="icon flexCenter"><MdOutlineArrowDropDown size={20} /></div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="secondaryText">
                                    MyHouse affiliated agent will help you capitalize on current market opportunities and 
                                    assist you in making the right choice for the long term..
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem className="accordionItem" key="3" uuid="3">
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordionButton">
                                    <div className="icon flexCenter"><FaHouseCircleCheck size={20} /></div>
                                    <span className="primaryText">Find your perfect home now with us</span>
                                    <div className="icon flexCenter"><MdOutlineArrowDropDown size={20} /></div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="secondaryText">
                                    MyHouse has set the standard in the real estate business. So, when it comes to your 
                                    home, never settle. Move with the relentless agents of the MyHouse Brand on your side. 
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="promises-right">
                    <div className="image-container">
                        <img src="./media/img/agent.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promises;