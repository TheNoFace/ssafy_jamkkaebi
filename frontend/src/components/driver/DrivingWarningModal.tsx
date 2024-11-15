import styled from "styled-components";
import {
  Card,
  GrayLine,
  RedLine,
  EclipseDiv,
  GrayEclipseSVG,
  BlueEclipseSVG,
  ModalGlassDiv,
  RightRedEclipse,
  LeftRedEclipse,
  RightRedEclipseDiv,
  LeftRedEclipseDiv,
} from "@/styles/driver/GlassmorphismStyle";
import { WarningSVG } from "@/styles/driver/WarningModal";
import { DriverText } from "./driverMain/DriverMainCSS";
import { ButtonDiv } from "./driverReport/DriverReportCSS";

const CustomModalGlassDiv = styled(ModalGlassDiv)`
  padding-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomButtonDiv = styled(ButtonDiv)`
  margin-top: auto; /* 상단의 다른 내용과 간격을 자동으로 확보하여 하단으로 이동 */
  align-self: center; /* 버튼을 가운데 정렬 (필요시) */
`;

interface DrivingWarningModalProps {
  onClose: () => void;
}

const DrivingWarningModal: React.FC<DrivingWarningModalProps> = ({
  onClose,
}) => {
  return (
    <Card cardwidth="400px" cardheight="550px">
      <GrayLine cardwidth="56%" opacity={0.8} position="top" offsetleft="7%" />
      <RedLine opacity={0.8} position="left" />
      <RedLine opacity={0.8} position="right" />
      <LeftRedEclipseDiv top="20%">
        <LeftRedEclipse />
      </LeftRedEclipseDiv>
      <RightRedEclipseDiv top="20%">
        <RightRedEclipse />
      </RightRedEclipseDiv>
      <EclipseDiv cardwidth="66%" cardheight="14%" top="1%">
        <GrayEclipseSVG cardwidth="100%" cardheight="100%" />
      </EclipseDiv>
      <EclipseDiv cardwidth="66%" cardheight="14%" bottom="1%">
        <BlueEclipseSVG cardwidth="100%" cardheight="100%" />
      </EclipseDiv>
      <GrayLine
        cardwidth="289px"
        opacity={0.6}
        position="bottom"
        centered={true}
      />
      <CustomModalGlassDiv
        onClick={(e) => e.stopPropagation()}
        cardwidth="100%"
        cardheight="100%"
      >
        <WarningSVG />
        <DriverText fontSize="30px" fontWeight={700}>
          경고!
        </DriverText>
        <DriverText
          color="#e0e0e0"
          fontSize="15px"
          fontWeight={400}
          lineHeight={1.4}
        >
          졸음 수치가 위험 수준까지 도달하였습니다.
          <br />
          안전한 운행을 위해 휴식을 취해주세요.
        </DriverText>
        <CustomButtonDiv onClick={onClose}>
          <DriverText fontSize="20px" fontWeight={600}>
            확인
          </DriverText>
        </CustomButtonDiv>
      </CustomModalGlassDiv>
    </Card>
  );
};

export default DrivingWarningModal;
