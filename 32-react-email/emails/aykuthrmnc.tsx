import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

const AykutHrmnc = () => {
  return (
    <Html>
      <Head>
        <title>Aykut Harmancı</title>
      </Head>
      <Preview>Aykut Harmancı tarafından gönderildi.</Preview>
      <Tailwind
        config={{
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                primary: "#32445a",
                secondary: "#2b3548",
              },
              fontSize: {
                15: "0.938rem",
              },
            },
          },
        }}
      >
        <Body
          style={{ borderTopWidth: "4px", borderTopStyle: "solid" }}
          className="bg-[#fafafa] border-[#6b4fbb] py-10 font-sans"
        >
          <Container>
            <Section className="flex justify-center mb-6">
              <Img src={`${baseUrl}/static/gitlab.png`} width="55" height="55" alt="Gitlab's Logo" />
            </Section>

            <Section className="bg-white border border-[#ededed] text-center">
              <Heading as="h4">Help us protect your account</Heading>
              <Text className="text-xs px-14">
                Before you sign in, we need to verify your identity. Enter the following code on the sign-in page.
              </Text>
              <Section className="w-[207px] h-[53px] bg-zinc-100 font-semibold text-lg tracking-widest">071190</Section>
              <Text className="text-[10px] leading-4 px-14">
                If you have not recently tried to sign into Gitlab, we recommend{" "}
                <Button href="https://github.com/aykuthrmnc" className="text-[#3777b0]">
                  changing your password
                </Button>{" "}
                and{" "}
                <Button href="https://github.com/aykuthrmnc" className="text-[#3777b0]">
                  setting up Two-Factor Authentication
                </Button>{" "}
                to keep your account safe. Your verification code expires after 240 minutes.
              </Text>
            </Section>

            <Section className="text-center mt-4">
              <Img
                src={`${baseUrl}/static/gitlab2.png`}
                width="83.75"
                height="20"
                alt="Gitlab's Logo"
                className="inline"
              />
              <Text className="text-[13px] text-zinc-500">
                You're receiving this email because of your account on gitlab.com.{" "}
                <Button href="https://github.com/aykuthrmnc" className="text-[#3777b0]">
                  Manage all notifications
                </Button>{" "}
                •{" "}
                <Button href="https://github.com/aykuthrmnc" className="text-[#3777b0]">
                  Help
                </Button>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default AykutHrmnc;
