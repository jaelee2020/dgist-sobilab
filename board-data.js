// Board data - shared between index.html and board.html
// Update this file to add new board items
const boardItems = [
        // === New (2026) ===
        {
            title: "2026 ROBOSOFT",
            date: "Apr 2026",
            year: 2026,
            desc: "*April 7-11th, 2026.\nIEEE International Conference on Soft Robotics (2026 ROBOSOFT), Kanazawa, Japan",
            img: "https://static.wixstatic.com/media/56a777_c26a17bc901240e4b2e3e4a8f05a6350~mv2.png/v1/fill/w_600,h_338,al_c,q_80,enc_auto/56a777_c26a17bc901240e4b2e3e4a8f05a6350~mv2.png"
        },
        {
            title: "2026 KMEMS Conference",
            date: "Mar 2026",
            year: 2026,
            desc: "*March 28th, 2026.\nKMEMS Conference in Jeju",
            img: "https://static.wixstatic.com/media/56a777_509051199b5c464aa1cb720e7f476e6a~mv2.png/v1/fill/w_600,h_576,al_c,q_80,enc_auto/56a777_509051199b5c464aa1cb720e7f476e6a~mv2.png"
        },
        {
            title: "2026 The Korean Sensors Society",
            date: "Mar 2026",
            year: 2026,
            desc: "*March, 2026.\nThe Korean Sensors Society in Seoul",
            img: "https://static.wixstatic.com/media/56a777_614ab2b1283942ef9e11d96b3afde0a0~mv2.png/v1/fill/w_600,h_576,al_c,q_80,enc_auto/56a777_614ab2b1283942ef9e11d96b3afde0a0~mv2.png"
        },
        // === Page 1 (2025) ===
        {
            title: "2025 KSS & KIM Conference",
            date: "Oct 2025",
            year: 2025,
            desc: "*Oct 22-24th, 2025.\nThe 2025 Fall Conference of the Korean Sensors Society\n\n*Oct 29-31st, 2025.\nThe Korean Institute of Metals and Materials",
            img: "https://static.wixstatic.com/media/56a777_30427b1e39ed4770b117c7b5e8a1a218~mv2.jpg/v1/fill/w_600,h_623,al_c,q_80,enc_auto/56a777_30427b1e39ed4770b117c7b5e8a1a218~mv2.jpg"
        },
        {
            title: "2025 Graduation",
            date: "Aug 2025",
            year: 2025,
            desc: "* August 14th, 2025. We congratulate Junyeong on all the work he has accomplished at SoBi.\nWe wish you blessings on your journey ahead.",
            img: "https://static.wixstatic.com/media/56a777_3f14afd6332f4ca4adc093f66e2cc43f~mv2.jpg/v1/fill/w_600,h_745,al_c,q_80,enc_auto/56a777_3f14afd6332f4ca4adc093f66e2cc43f~mv2.jpg"
        },
        {
            title: "2025 NANO KOREA",
            date: "Jul 2025",
            year: 2025,
            desc: "*July 02-04th, 2025.\nThe 23nd International Nanotech Conference & Exhibition",
            img: "https://static.wixstatic.com/media/56a777_c0599ab8804948f7ae54faeaafa6f839~mv2.jpg/v1/fill/w_600,h_425,al_c,q_80,enc_auto/56a777_c0599ab8804948f7ae54faeaafa6f839~mv2.jpg"
        },
        {
            title: "Visiting ETH Zurich in 2025",
            date: "May-Jun 2025",
            year: 2025,
            desc: "* May 1st-June 1st, 2025.\nWe conducted joint research on biomedical electronics with Prof. William R. Taylor's group at ETH Zurich.",
            img: "https://static.wixstatic.com/media/56a777_841fc91427e7494c80b3064dfd1d4641~mv2.jpg/v1/fill/w_600,h_525,al_c,q_80,enc_auto/56a777_841fc91427e7494c80b3064dfd1d4641~mv2.jpg"
        },
        {
            title: "2025 Celebration of Teacher\u0027s Day and Group Dinner Event",
            date: "May 2025",
            year: 2025,
            desc: "* May 25th, 2025.\nThe group members organized an event to commemorate Teacher\u0027s Day for the professor, and in the evening, all the group members enjoyed a delicious dinner together.",
            img: "https://static.wixstatic.com/media/56a777_2162cca0246e49748935f3f76557ebb0~mv2.png/v1/fill/w_600,h_724,al_c,q_80,enc_auto/56a777_2162cca0246e49748935f3f76557ebb0~mv2.png"
        },
        {
            title: "2025 Korean Institute of Metals and Materials",
            date: "Apr 2025",
            year: 2025,
            desc: "*April 23-25th, 2025.\nJinho Kim attended the 2025 Spring Conference of the Korean Institute of Metals and Materials.",
            img: "https://static.wixstatic.com/media/56a777_bf531855b8384d71a0ac4aa125acf07d~mv2.png/v1/fill/w_600,h_552,al_c,q_80,enc_auto/56a777_bf531855b8384d71a0ac4aa125acf07d~mv2.png"
        },
        // === Page 2 (2025-2024) ===
        {
            title: "2025 The Korean Fiber Society",
            date: "Apr 2025",
            year: 2025,
            desc: "*April 23-25th, 2025.\nGroup members attended the 2025 Spring Conference of the Korean Fiber Society.",
            img: "https://static.wixstatic.com/media/56a777_b0eeba4c6d104465854e8455dfe93f56~mv2.png/v1/fill/w_600,h_361,al_c,q_80,enc_auto/56a777_b0eeba4c6d104465854e8455dfe93f56~mv2.png"
        },
        {
            title: "2025 The Korean Sensors Society",
            date: "Apr 2025",
            year: 2025,
            desc: "*April 2-3rd, 2025.\nGroup members attended the 2025 Spring Conference of the Korean Sensors Society.",
            img: "https://static.wixstatic.com/media/56a777_59126f6bf7a94b4d8c9ce20684e419e2~mv2.png/v1/fill/w_600,h_698,al_c,q_80,enc_auto/56a777_59126f6bf7a94b4d8c9ce20684e419e2~mv2.png"
        },
        {
            title: "2025 KMEMS Conference",
            date: "Mar 2025",
            year: 2025,
            desc: "*March 26-28th, 2025.\nGroup members attended the 27th KMEMS Conference.",
            img: "https://static.wixstatic.com/media/56a777_d25329a929044b80b65eb221b458cdef~mv2.jpg/v1/fill/w_600,h_738,al_c,q_80,enc_auto/56a777_d25329a929044b80b65eb221b458cdef~mv2.jpg"
        },
        {
            title: "2025 Graduation",
            date: "Feb 2025",
            year: 2025,
            desc: "* February 14th, 2025.\nWe congratulate Mugeun on all the work he has accomplished at SoBi.\nWe wish you blessings on your journey ahead.",
            img: "https://static.wixstatic.com/media/56a777_e145afe07feb4ba19103486e9a9f3194~mv2.jpg/v1/fill/w_600,h_338,al_c,q_80,enc_auto/56a777_e145afe07feb4ba19103486e9a9f3194~mv2.jpg"
        },
        {
            title: "2024 Lab Year-End Party",
            date: "Dec 2024",
            year: 2024,
            desc: "SoBiLab group members had a joyful year-end party on December 18.\nWe talked freely about our research and had a good time with a delicious dinner. And we also played a bowling game.",
            img: "https://static.wixstatic.com/media/56a777_67ae13e88643469ebfecf87d2832b3e4~mv2.jpg/v1/fill/w_600,h_456,al_c,q_80,enc_auto/56a777_67ae13e88643469ebfecf87d2832b3e4~mv2.jpg"
        },
        {
            title: "2024 KMEMS Conference",
            date: "Nov 2024",
            year: 2024,
            desc: "*November 21st-22nd, 2024.\n5th Korean Micro and Nano System Conference",
            img: "https://static.wixstatic.com/media/56a777_bd3da3590c264d76b6c254dd7ba0e69b~mv2.png/v1/fill/w_600,h_450,al_c,q_80,enc_auto/56a777_bd3da3590c264d76b6c254dd7ba0e69b~mv2.png"
        },
        // === Page 3 (2024) ===
        {
            title: "2024 4/4 Quarter Workshop",
            date: "Nov 2024",
            year: 2024,
            desc: "*Nov 14th, 2024.\nSoBiLab group members had the 4/4 Quarter workshop in DGIST.\nWe talked freely about our research and had a good time with a delicious dinner.\nWe are looking forward to next workshop!!",
            img: "https://static.wixstatic.com/media/56a777_da54f697cedc44e3bb5214e88fc3bc0e~mv2.jpg/v1/fill/w_600,h_698,al_c,q_80,enc_auto/56a777_da54f697cedc44e3bb5214e88fc3bc0e~mv2.jpg"
        },
        {
            title: "Visiting ETH in Zurich and EPFL (Joint Research)",
            date: "Sep-Oct 2024",
            year: 2024,
            desc: "*September 26th-October 10th, 2024.\nWe conducted joint research on biomedical electronics with Prof. William R. Taylor's group at ETH Zurich. Additionally, we visited Prof. Nako's lab at EPFL for a delightful discussion on our respective research fields.",
            img: "https://static.wixstatic.com/media/56a777_88f8aa77d141433fb07ad46c5e75e324~mv2.jpg/v1/fill/w_600,h_699,al_c,q_80,enc_auto/56a777_88f8aa77d141433fb07ad46c5e75e324~mv2.jpg"
        },
        {
            title: "Visiting ETH in Zurich and EPFL (Seminars)",
            date: "Sep-Oct 2024",
            year: 2024,
            desc: "*September 26th-October 10th, 2024.\nThe SoBi-lab group held various seminars with groups led by Professors Janos Voros, William R. Taylor, and Carlo Menon from ETH Zurich, and Professors Nako and Fabien Sorin from EPFL.",
            img: "https://static.wixstatic.com/media/56a777_c2d8d9c366fd47ad895edf76fe2739d6~mv2.jpg/v1/fill/w_600,h_371,al_c,q_80,enc_auto/56a777_c2d8d9c366fd47ad895edf76fe2739d6~mv2.jpg"
        },
        {
            title: "2024 NANO KOREA",
            date: "Jul 2024",
            year: 2024,
            desc: "*July 03-05th, 2024.\nThe 22nd International Nanotech Symposium & Exhibition",
            img: "https://static.wixstatic.com/media/56a777_e1e86596ead742f6a78fb78aeb796153~mv2.jpg/v1/fill/w_600,h_645,al_c,q_80,enc_auto/56a777_e1e86596ead742f6a78fb78aeb796153~mv2.jpg"
        },
        {
            title: "2024 2/4 Quarter Workshop",
            date: "May 2024",
            year: 2024,
            desc: "*May 16th, 2024.\nSoBiLab group members and students had the 2/4 Quarter workshop in DGIST.\nWe talked freely about our research and had a good time with a delicious dinner.",
            img: "https://static.wixstatic.com/media/56a777_4f5397a87f5f4e59a8938fa85d70b048~mv2.jpg/v1/fill/w_600,h_371,al_c,q_80,enc_auto/56a777_4f5397a87f5f4e59a8938fa85d70b048~mv2.jpg"
        },
        {
            title: "2024 KMEMS Conference",
            date: "Mar 2024",
            year: 2024,
            desc: "*March 27-29th, 2024.\n26th Korean MEMS Conference",
            img: "https://static.wixstatic.com/media/56a777_edbba60d499745f4b84cb194fd599f53~mv2.png/v1/fill/w_600,h_800,al_c,q_80,enc_auto/56a777_edbba60d499745f4b84cb194fd599f53~mv2.png"
        },
        // === Page 4 (2024-2023) ===
        {
            title: "2024 BioEL International Winterschool on Bioelectronics",
            date: "Mar 2024",
            year: 2024,
            desc: "*March 16-23rd, 2024. The 9th BioEL Winterschool on Bioelectronics in Tirol, Austria.\nWe talked freely about our research with leading researchers from around the world and had a great time engaging in a winter leisure activity.",
            img: "https://static.wixstatic.com/media/56a777_b4045e8e7b1b49898b2ee6ed21e53b76~mv2.jpg/v1/fill/w_600,h_523,al_c,q_80,enc_auto/56a777_b4045e8e7b1b49898b2ee6ed21e53b76~mv2.jpg"
        },
        {
            title: "2024 BioEL International Winterschool on Bioelectronics",
            date: "Mar 2024",
            year: 2024,
            desc: "*March 16-23rd, 2024. The 9th BioEL Winterschool on Bioelectronics in Tirol, Austria.\nProf. Lee and Hwajoong Kim participated as a contributed speaker and poster presenter, respectively.",
            img: "https://static.wixstatic.com/media/56a777_7a0512aaf33b4156915af553be8059fa~mv2.jpg/v1/fill/w_600,h_404,al_c,q_80,enc_auto/56a777_7a0512aaf33b4156915af553be8059fa~mv2.jpg"
        },
        {
            title: "2023 IEEE NANOMED Conference",
            date: "Dec 2023",
            year: 2023,
            desc: "*December 5-8th, 2023. Prof. Lee also participated as an invited speaker at the IEEE NANOMED conference.",
            img: "https://static.wixstatic.com/media/56a777_8f6feabe151041cf98546d957ef579d0~mv2.png/v1/fill/w_600,h_450,al_c,q_80,enc_auto/56a777_8f6feabe151041cf98546d957ef579d0~mv2.png"
        },
        {
            title: "2023 IEEE NANOMED Conference",
            date: "Dec 2023",
            year: 2023,
            desc: "*December 5-8th, 2023.\nThe 16th IEEE International Conference on Nano/Molecular Medicine & Engineering in Okinawa",
            img: "https://static.wixstatic.com/media/56a777_097eac00e6f94c7e8a46307f2b60e619~mv2.jpg/v1/fill/w_600,h_688,al_c,q_80,enc_auto/56a777_097eac00e6f94c7e8a46307f2b60e619~mv2.jpg"
        },
        {
            title: "2023 KIM Fall Conference",
            date: "Oct 2023",
            year: 2023,
            desc: "*October 25-27th, 2023.\nKorean Institute of Metals and Materials in Daegu",
            img: "https://static.wixstatic.com/media/56a777_2de71e2507fb4bddbbb60d8c78b7a324~mv2.jpg/v1/fill/w_600,h_623,al_c,q_80,enc_auto/56a777_2de71e2507fb4bddbbb60d8c78b7a324~mv2.jpg"
        },
        {
            title: "2023 KFS Conference",
            date: "Oct 2023",
            year: 2023,
            desc: "*October 25-27th, 2023.\nKorean Fiber Society in Busan",
            img: "https://static.wixstatic.com/media/56a777_4d6343739073490fa863b074e29c2f81~mv2.jpg/v1/fill/w_600,h_303,al_c,q_80,enc_auto/56a777_4d6343739073490fa863b074e29c2f81~mv2.jpg"
        },
        // === Page 5 (2023-2022) ===
        {
            title: "Electroceuticals Development Project Workshop",
            date: "Aug 2023",
            year: 2023,
            desc: "*August 14th, 2023. We had an impressive and meaningful workshop with Yonsei Univ. team and Sungkyunkwan Univ. team in Seoul.",
            img: "https://static.wixstatic.com/media/56a777_a4e8249cf7e149f7b7a063dff789ea05~mv2.jpg/v1/fill/w_600,h_709,al_c,q_80,enc_auto/56a777_a4e8249cf7e149f7b7a063dff789ea05~mv2.jpg"
        },
        {
            title: "Workshop with Prof. Janos V\u00f6r\u00f6s",
            date: "May 2023",
            year: 2023,
            desc: "*May 18th, 2023.\nProf. Janos V\u00f6r\u00f6s (ETH Zurich, Switzerland) visited SoBiLab. We had a great workshop about Neuroscience with Prof. Janos V\u00f6r\u00f6s.",
            img: "https://static.wixstatic.com/media/6f294c_50db7cc828c34098ac61c68c29599546~mv2.jpg/v1/fill/w_600,h_560,al_c,q_80,enc_auto/6f294c_50db7cc828c34098ac61c68c29599546~mv2.jpg"
        },
        {
            title: "2023 IEEE NEMS",
            date: "May 2023",
            year: 2023,
            desc: "*May 14-17th, 2023.\nIEEE NEMS 2023 in Jeju",
            img: "https://static.wixstatic.com/media/6f294c_4abda83c6b1a4692883a8c6ce620bed8~mv2.png/v1/fill/w_600,h_450,al_c,q_80,enc_auto/6f294c_4abda83c6b1a4692883a8c6ce620bed8~mv2.png"
        },
        {
            title: "2023 Spring",
            date: "Mar 2023",
            year: 2023,
            desc: "*March 28th, 2023.\nWe took pictures of cherry blossoms together.",
            img: "https://static.wixstatic.com/media/6f294c_b8d80a7b65a44452bfac7e8c10b97e61~mv2.png/v1/fill/w_600,h_400,al_c,q_80,enc_auto/6f294c_b8d80a7b65a44452bfac7e8c10b97e61~mv2.png"
        },
        {
            title: "2023 Graduation",
            date: "Feb 2023",
            year: 2023,
            desc: "* February 16th, 2023.\nWe congratulate Seonggyu on his amazing presentation and all the work he has done at SoBi. We also congratulate Mugeun on his undergraduate graduation, who will join our group after.",
            img: "https://static.wixstatic.com/media/6f294c_e0bab953834348c288559201db61f6bf~mv2.jpg/v1/fill/w_600,h_679,al_c,q_80,enc_auto/6f294c_e0bab953834348c288559201db61f6bf~mv2.jpg"
        },
        {
            title: "2022 MRS Fall Conference",
            date: "Nov-Dec 2022",
            year: 2022,
            desc: "*November 28th-December 2nd, 2022.\n2022 Materials Research Society Fall Meeting & Exhibit",
            img: "https://static.wixstatic.com/media/6f294c_60c79c0a7a764449a491f5187f299298~mv2.jpg/v1/fill/w_600,h_565,al_c,q_80,enc_auto/6f294c_60c79c0a7a764449a491f5187f299298~mv2.jpg"
        },
        // === Page 6 (2022) ===
        {
            title: "2022 KIM Fall Conference",
            date: "Oct 2022",
            year: 2022,
            desc: "*October 26-28th, 2022.\n2022 Korean Institute of Metals and Materials Fall",
            img: "https://static.wixstatic.com/media/6f294c_11322b053f5a40c6a394d9d2d88e9368~mv2.jpg/v1/fill/w_600,h_552,al_c,q_80,enc_auto/6f294c_11322b053f5a40c6a394d9d2d88e9368~mv2.jpg"
        },
        {
            title: "2022 ICFPE Conference",
            date: "Oct 2022",
            year: 2022,
            desc: "*October 11-14th, 2022.\n2022 Fall International Conference on Flexible and Printed Electronics",
            img: "https://static.wixstatic.com/media/6f294c_d29154d347b44a34b6e3e3aa5adb083b~mv2.jpg/v1/fill/w_600,h_552,al_c,q_80,enc_auto/6f294c_d29154d347b44a34b6e3e3aa5adb083b~mv2.jpg"
        },
        {
            title: "2022 Summer Workshop",
            date: "Aug 2022",
            year: 2022,
            desc: "*August 25-26th, 2022.\nSoBiLab group members and students had the summer workshop in Tongyeong.\nWe talked freely about our research and had a good time with a delicious dinner.\nWe are looking forward to next workshop!!",
            img: "https://static.wixstatic.com/media/6f294c_211e6f1f3c874a38b3b3a6692c4549a0~mv2.jpg/v1/fill/w_600,h_553,al_c,q_80,enc_auto/6f294c_211e6f1f3c874a38b3b3a6692c4549a0~mv2.jpg"
        },
        {
            title: "2022 KIM Spring Conference",
            date: "Apr 2022",
            year: 2022,
            desc: "*April 27-29th, 2022.\n2022 Spring Conference of the Korean Institute of Metals and Materials",
            img: "https://static.wixstatic.com/media/6f294c_73bee3ddce644d2392f5cd43c815fe1f~mv2.png/v1/fill/w_600,h_601,al_c,q_80,enc_auto/6f294c_73bee3ddce644d2392f5cd43c815fe1f~mv2.png"
        },
        {
            title: "2022 KIM Spring Conference",
            date: "Apr 2022",
            year: 2022,
            desc: "*April 27-29th, 2022.\nProf. Lee attended 2022 Spring Conference of the Korean Institute of Metals and Materials as an invited speaker.",
            img: "https://static.wixstatic.com/media/6f294c_e47e021edfa845648ac0d0485b09eefa~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,enc_auto/6f294c_e47e021edfa845648ac0d0485b09eefa~mv2.jpg"
        },
        {
            title: "2022 KMEMS Conference",
            date: "Apr 2022",
            year: 2022,
            desc: "*April 6th-8th, 2022.\n24th Korean MEMS Conference",
            img: "https://static.wixstatic.com/media/6f294c_ff46c25163254078ab8a484f10fafb33~mv2.jpg/v1/fill/w_600,h_505,al_c,q_80,enc_auto/6f294c_ff46c25163254078ab8a484f10fafb33~mv2.jpg"
        },
        // === Page 7 (2021-2020) ===
        {
            title: "Most Popular Articles in 2021",
            date: "2021",
            year: 2021,
            desc: "Our paper has been featured as one of the most popular Nanoscale articles in 2021!",
            img: "https://static.wixstatic.com/media/a0b41f_9919142f17014105b8fcf39fc5f0bcf5~mv2.jpg/v1/fill/w_600,h_552,al_c,q_80,enc_auto/a0b41f_9919142f17014105b8fcf39fc5f0bcf5~mv2.jpg"
        },
        {
            title: "2021 ICAE",
            date: "Nov 2021",
            year: 2021,
            desc: "6th International Conference on Advanced Electromaterials\n*November 9th-12th, 2021",
            img: "https://static.wixstatic.com/media/6f294c_93b2b39aa8d04949a37dd6043c718d3c~mv2.jpg/v1/fill/w_600,h_533,al_c,q_80,enc_auto/6f294c_93b2b39aa8d04949a37dd6043c718d3c~mv2.jpg"
        },
        {
            title: "Cover Paper in Nature Electronics!",
            date: "Apr 2021",
            year: 2021,
            desc: "Our paper recently published in Nature Electronics has been selected as a cover of the journal this month!",
            img: "https://static.wixstatic.com/media/a0b41f_f2257501b78649d79451008db7a82a6c~mv2.png/v1/fill/w_600,h_793,al_c,q_80,enc_auto/a0b41f_f2257501b78649d79451008db7a82a6c~mv2.png"
        },
        {
            title: "2021 KMEMS Conference",
            date: "Apr 2021",
            year: 2021,
            desc: "*April 8th, 2021.\nProf. Lee attended the 23rd KMEMS Conference as an invited speaker.\nHe has also received a plaque of appreciation for invited speaker in the Young Scientist Session.",
            img: "https://static.wixstatic.com/media/a0b41f_d724198b1ca24ece986f4781e1a0dd8d~mv2.jpg/v1/fill/w_600,h_418,al_c,q_80,enc_auto/a0b41f_d724198b1ca24ece986f4781e1a0dd8d~mv2.jpg"
        },
        {
            title: "2021 Spring",
            date: "2021",
            year: 2021,
            desc: "Junseo and Solbi finished their internship in SoBiLab. During the short stay, they perfectly completed what they were supposed to do!\nThank you for your stay and nice works.",
            img: "https://static.wixstatic.com/media/a0b41f_379082bef4274fc08fa539d535778ba5~mv2.jpg/v1/fill/w_600,h_478,al_c,q_80,enc_auto/a0b41f_379082bef4274fc08fa539d535778ba5~mv2.jpg"
        },
        {
            title: "2020 Winter Internship",
            date: "2020",
            year: 2020,
            desc: "Winter internship at SoBiLab.",
            img: "https://static.wixstatic.com/media/a0b41f_71edd208cc8a490abb9e31b89a179d3f~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/a0b41f_71edd208cc8a490abb9e31b89a179d3f~mv2.jpg"
        }
    ]
