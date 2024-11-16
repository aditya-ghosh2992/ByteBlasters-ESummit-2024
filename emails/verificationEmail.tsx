// It is preferable as you can use multiple services where you send emails like for product bookingm, shipment etc !! 
import {
    Html,
    Head,
    Heading,
    Font,
    Preview,
    Text,
    Row,
    Section,
    Button,
} from "@react-email/components";
//In TS it is important to provide interface verification props for type safety as the user wont be able to change the type of the email !  
interface EmailVerificationProps  {
    username : string;
    otp : string;
}

export default function EmailVerification({username , otp} : EmailVerificationProps) {
    return (
        <Html>
            <Head>
                <title>
                    Email Verification
                </title>
                {/*<Font
                    fontFamily="Inter"
                    src="https://fonts.googleapis.com/css2?family=Inter&display=swap"
                />*/}
            </Head>
            <Preview>Verification code : {otp}</Preview>
            <Section >
                <Row>
                <Heading as="h1" > Welcome {username} </Heading>
                </Row>
                <Row>
                    <Text>Enter the verification code to complete the registration</Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>
                </Row>
                <Row>
                    <Text>If you did not request this code, then please ignore this email ! </Text>
                </Row>
             </Section>
        </Html>
    )
}