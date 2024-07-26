/*
 * @Author: LiuJunJie liujunjie@pdstars.com
 * @Date: 2024-07-25 09:51:16
 * @LastEditors: LiuJunJie liujunjie@pdstars.com
 * @LastEditTime: 2024-07-25 09:51:22
 * @FilePath: \nextjs-dashboard\app\ui\font.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
