import React from "react";
import { Timeline, Text } from "@mantine/core";
import { AiFillCheckCircle, AiFillClockCircle } from "react-icons/ai";

const Education = () => {
  return (
    <div>
      {/* <h2 className=" uppercase text-left py-3 ">
        education roadmap
      </h2> */}
      <Timeline active={2} lineWidth={2} bulletSize={18}>
        <Timeline.Item
          title="2019 - 2021"
          className=" text-[16px] text-gray-500"
          bullet={<AiFillCheckCircle size={18} />}>
          <Text  className=" font-bold text-black dark:text-white" size="md">
            Diploma In Electronics And Communication
          </Text>
          <Text size="sm" className = "text-[16px] text-gray-500 dark:text-[#ccc]" mt={4}>
            From Government Institute Of Technology
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2022 - 2023"
          className=" text-[16px] text-gray-500"
          bullet={<AiFillCheckCircle size={18} />}>
          <Text className=" font-bold text-black dark:text-white" size="md">
            Special Web Design Certification
          </Text>
          <Text size="sm" className = "text-[16px] text-gray-500 dark:text-[#ccc]" mt={4}>
            From MMS-IT
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2022 - present"
          className=" text-[16px] text-gray-500"
          bullet={<AiFillClockCircle className=" text-white" size={18} />}>
          <Text className=" font-bold text-black dark:text-white" size="md">
            Web Application Development Certification
          </Text>
          <Text size="sm" className = "text-[16px] text-gray-500 dark:text-[#ccc]" mt={4}>
            In MMS-IT
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2022 - present"
          className=" text-[16px] text-gray-500"
          bullet={<AiFillClockCircle className=" text-white" size={18} />}>
          <Text className=" font-bold text-black dark:text-white" size="md">
            B.sc in Computer Science
          </Text>
          <Text size="sm" className = "text-[16px] text-gray-500 dark:text-[#ccc]" mt={4}>
            In University Of People
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Education;
