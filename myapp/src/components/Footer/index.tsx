import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '鸿哥出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'honggeweb',
          title: 'honggeweb',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },

        {
          key: 'haigeweb',
          title: 'haigeweb',
          href: 'https://ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 海哥 GitHub </>,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
