import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = '火锅出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 火锅 GitHub
            </>
          ),
          href: 'https://github.com/ShimenTian',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
