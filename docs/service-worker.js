if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const o=e=>a(e,c),f={module:{uri:c},exports:d,require:o};i[c]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/android-chrome-144x144.png",revision:"e3900923f09cf822fbc7eb340a0f74ba"},{url:"/android-chrome-192x192.png",revision:"9c5c0c23731f0af37d0396fbec738e6c"},{url:"/android-chrome-256x256.png",revision:"f6e223b84570f414c2d2139b468887ae"},{url:"/android-chrome-36x36.png",revision:"a38a868df1e55786e5a2f9e15afad4a6"},{url:"/android-chrome-384x384.png",revision:"ed3903704b86c9c29cf49614c073d712"},{url:"/android-chrome-48x48.png",revision:"3e3cec9242d1274378948d4461abe706"},{url:"/android-chrome-512x512.png",revision:"06c031f9ec420dc377dfe095e479fa96"},{url:"/android-chrome-72x72.png",revision:"72cd33a36493eb9c808a01c0baf863f2"},{url:"/android-chrome-96x96.png",revision:"7683492ff77e68fc2be56970bd20a168"},{url:"/apple-touch-icon-1024x1024.png",revision:"9ef7ae039bb88d04726bbed483cbe1a6"},{url:"/apple-touch-icon-114x114.png",revision:"e6805635d8dd094c14a260b8a294601b"},{url:"/apple-touch-icon-120x120.png",revision:"6c88998bbdb1e76ee17a6793dae27bcf"},{url:"/apple-touch-icon-144x144.png",revision:"e3900923f09cf822fbc7eb340a0f74ba"},{url:"/apple-touch-icon-152x152.png",revision:"65d0ab492993938933717b534713381d"},{url:"/apple-touch-icon-167x167.png",revision:"2cc01f12d074eba50af68cc59a73bc48"},{url:"/apple-touch-icon-180x180.png",revision:"24141c89d4204865afbca3641143ed23"},{url:"/apple-touch-icon-57x57.png",revision:"51c6585ace154dd2b289e2f3946f77a1"},{url:"/apple-touch-icon-60x60.png",revision:"fba9dfa7f98495f7aaf13c21288c8b97"},{url:"/apple-touch-icon-72x72.png",revision:"72cd33a36493eb9c808a01c0baf863f2"},{url:"/apple-touch-icon-76x76.png",revision:"b948a228d01c846c56a77c40a4f2e830"},{url:"/apple-touch-icon-precomposed.png",revision:"24141c89d4204865afbca3641143ed23"},{url:"/apple-touch-icon.png",revision:"24141c89d4204865afbca3641143ed23"},{url:"/apple-touch-startup-image-1125x2436.png",revision:"d812f3c49f4b10e84ce63bdcb305910a"},{url:"/apple-touch-startup-image-1136x640.png",revision:"9e619f00ba4944d70213b1a1f376b61f"},{url:"/apple-touch-startup-image-1242x2208.png",revision:"3751d4b28427404ddafd00119f88bc28"},{url:"/apple-touch-startup-image-1242x2688.png",revision:"c6e8aa29a2d3c1d31c5e005f13dcd5b9"},{url:"/apple-touch-startup-image-1334x750.png",revision:"fb28c09a2613550480bdf97915355e67"},{url:"/apple-touch-startup-image-1536x2048.png",revision:"e6f4f5b65d38d29118b830c2a030ba43"},{url:"/apple-touch-startup-image-1620x2160.png",revision:"90801d2b8d6713aa055a96147313fe34"},{url:"/apple-touch-startup-image-1668x2224.png",revision:"4de38944e2b49eaceedce0551b137c01"},{url:"/apple-touch-startup-image-1668x2388.png",revision:"5b0ff949dadbf459e67dc180017a83fc"},{url:"/apple-touch-startup-image-1792x828.png",revision:"3f17b2e918c8ba73a6b65cc53735d51d"},{url:"/apple-touch-startup-image-2048x1536.png",revision:"bb82347f23e19a90f6bbf45e917bb6bb"},{url:"/apple-touch-startup-image-2048x2732.png",revision:"672e99f4d3ae7e12b2f52f28d0b49181"},{url:"/apple-touch-startup-image-2160x1620.png",revision:"c5b1eb0194f78338230763160a6569f1"},{url:"/apple-touch-startup-image-2208x1242.png",revision:"bd48e7f4d80a8928533edfca1c1e8a6c"},{url:"/apple-touch-startup-image-2224x1668.png",revision:"6c3b24cbbaf0844bc9994ae7924e2e74"},{url:"/apple-touch-startup-image-2388x1668.png",revision:"19f72677888a4ae9ef40477d6b45302e"},{url:"/apple-touch-startup-image-2436x1125.png",revision:"7464cf5c4e5cd43acc883cb8512b6df3"},{url:"/apple-touch-startup-image-2688x1242.png",revision:"a245fc09adce325bde3d0bd235194ee1"},{url:"/apple-touch-startup-image-2732x2048.png",revision:"f2a7be5eb23ffff59b7855af539a6f52"},{url:"/apple-touch-startup-image-640x1136.png",revision:"9b0c667f7ec4735494b6d7244494adea"},{url:"/apple-touch-startup-image-750x1334.png",revision:"518287e423a34741ed221f3f87680086"},{url:"/apple-touch-startup-image-828x1792.png",revision:"35f2f23c42682e12605dd5e4665a1573"},{url:"/browserconfig.xml",revision:"c963c752b7288b2b87b16118441d5f2c"},{url:"/coast-228x228.png",revision:"53cb50ae25d49fc7da13f0df1128f6cb"},{url:"/favicon-16x16.png",revision:"08c9b4f236831ee67fe77c12434770c1"},{url:"/favicon-32x32.png",revision:"abd2840fb2ed9ebab2e3e3f20bc873f3"},{url:"/favicon-48x48.png",revision:"3e3cec9242d1274378948d4461abe706"},{url:"/favicon.ico",revision:"5cb3b53b6e33fe01c825211ae2819213"},{url:"/firefox_app_128x128.png",revision:"969107726dfaf09175939a54f47fa123"},{url:"/firefox_app_512x512.png",revision:"b0d9c0cf87c3cc08df6927a8adee986f"},{url:"/firefox_app_60x60.png",revision:"a6537e5a9ac24af7fa09dcd795e2bca8"},{url:"/manifest.json",revision:"c66c3b43fb6ff3b78acfd5cfe4c44528"},{url:"/manifest.webapp",revision:"f03c2821b31b90489cd9bc60f1c5e31e"},{url:"/mstile-144x144.png",revision:"e3900923f09cf822fbc7eb340a0f74ba"},{url:"/mstile-150x150.png",revision:"565540105ba034970a7731870b1fcd4b"},{url:"/mstile-310x150.png",revision:"88972ce54a4370586818ad2e2ec3d79c"},{url:"/mstile-310x310.png",revision:"3f25744f7341f956fb82a3d87511c16d"},{url:"/mstile-70x70.png",revision:"07baaf40effab9f47e08e936aa81b976"},{url:"/yandex-browser-50x50.png",revision:"b073074e0dc354be47e3f4bbd092a6b6"},{url:"/yandex-browser-manifest.json",revision:"4feaa3adfcedfd3ae5f09d9f9d9846ae"},{url:"715.js",revision:"0d21e2a516d5ce8f5ed4ea07c48c59c3"},{url:"715.js.LICENSE.txt",revision:"c26a3741f7c4cdb6653dec2121c0109e"},{url:"img/.DS_Store",revision:"f286d99b392e06038da43b50ab8ca8fa"},{url:"img/AAAS_-_American_Association_for_the_Advancement_of_Science.png",revision:"0ef23bbfee7f96cdf1d611e6aff780d7"},{url:"img/ADB_-_Asian_Development_Bank.png",revision:"292021188dbac51ec611eeebcda000bb"},{url:"img/AFP_Factstory_-_P&R_Agent.png",revision:"5802f741a6021a6a4dbdab80b50e4465"},{url:"img/AIHA_-_American_International_Health_Alliance.png",revision:"ad7808d77b835476f7e891e80464352d"},{url:"img/ANZ_Bank.png",revision:"2739c48df4c2faf20496ea2340fe4fbd"},{url:"img/APCO_Worldwide.png",revision:"719cd9c169e881212440b0c3a2de7eb5"},{url:"img/ASM_-_The_American_Society_for_Microbiology.png",revision:"d616087101bfd289a3cb05b2fa8b1dc7"},{url:"img/Abbott.png",revision:"2bd580f89aeb55391b2f8fa1229b70cb"},{url:"img/Adjuvant_Capital.png",revision:"9b818799d3c9a1f17ffab6b8b3f1d405"},{url:"img/Africa_Centres_for_Disease_Control_and_Prevention.png",revision:"2a67beab739a31139f1a2593cceaad04"},{url:"img/Agenda_2030.png",revision:"56ce228c4558de78af25cdedc9795b51"},{url:"img/Alex_Rothenberg.png",revision:"caf9c78870fef17d5fb21ab382c9cb38"},{url:"img/Allen_Blue.png",revision:"964e730744119a806720b1b1a7b4e7cf"},{url:"img/Alnylam_Pharmaceuticals.png",revision:"604111581c6a95c71e67a93e3c2403a2"},{url:"img/Amelia_Fawcett.png",revision:"316d9fd168b609d437c875b10d5ebbb8"},{url:"img/American_Enterprise_Institute.png",revision:"e7d814a77de7748e2660ad996a0b7cad"},{url:"img/Amir_Attaran.png",revision:"42ad7b38994f784c00c4663df82ac7c5"},{url:"img/Andrew_Jack.png",revision:"8a0a5e7bc172e4f39acd0da32c63e2e0"},{url:"img/Anthony_S_Fauci.png",revision:"c61c7be6c682b7b4697e8fbc6e1db668"},{url:"img/Apolitical.png",revision:"ab6e6f336020a56b6070826242eeb38a"},{url:"img/Asaf_Bitton.png",revision:"251e3a56d5d1aedcb0e143dd784826a8"},{url:"img/Asian_Federation_of_Biotechnology_(AFOB).png",revision:"90f21fd785347bbd3b5cd6a3630275b8"},{url:"img/Aspen_Strategy_Group.png",revision:"65d82dc42d88faecc71fcfefc28412b1"},{url:"img/AstraZeneca.png",revision:"190e789ffa0f4cc1799f0cc463671df0"},{url:"img/Atlantic_Council.png",revision:"1d4cfd99d03a680a0697d260a90ccd1a"},{url:"img/Australian_Department_of_Health.png",revision:"ec9874533be06f3b41deffe93327e21b"},{url:"img/Australian_GOV_-_National_COVID-19_Commission.png",revision:"1da07d66a422024ec539c45851b7942b"},{url:"img/Azra_Ghani.png",revision:"25ba096c19448c6587c8d42b3dd4c586"},{url:"img/BBC.png",revision:"3e8a3b4070d84a799f62df521ec0c1f7"},{url:"img/BMBF_-_Bundesministerium_für_Bildung_und_Forschung.png",revision:"feca3a4ee44db85f9f18982d733b7a8d"},{url:"img/BMGF_-_Bill_&_Melinda_Gates_Foundation.png",revision:"79194cf30cc698b570658f9770577c79"},{url:"img/Bank_Information_Center_(BIC).png",revision:"ff9d62fbd014e342cfb37a547bb86cb9"},{url:"img/Bayer_AG.png",revision:"5829070d4fffdfbe29cb7b0b7c5cb8af"},{url:"img/Beth_Cameron.png",revision:"8ed7c944bd680ab771ea352e41f422a2"},{url:"img/Big_Win_Philanthropy.png",revision:"d87f9794f7659982c78de6e2d9c02667"},{url:"img/Bill_Gates.png",revision:"8e2b14f27a790b8b4e4414d46081d94d"},{url:"img/BioNTech.png",revision:"8ff2ebf6414b4e5c5a9969a7d49063d1"},{url:"img/Biological_E._Limited.png",revision:"7978910733805a12a1f3e74192e02c50"},{url:"img/Bloomberg_Family_Foundation.png",revision:"b1ae2d43fc031a6d7b5f49cd9e2ff7a1"},{url:"img/Bono.png",revision:"09d1fa91d159a088211f5dfd22de5f43"},{url:"img/Brigham_and_Women’s_Hospital.png",revision:"fae6e038c71ce4d70075ba4636869ccf"},{url:"img/Brookings_Institution.png",revision:"bd881deedd0f8131e08c007a44f92540"},{url:"img/Bruce_Gellin.png",revision:"d3a82a37a6b141100166e24ac30782cb"},{url:"img/C-CAMP_-_Centre_for_Cellular_and_Molecular_Platforms.png",revision:"1d761ff5abfcac04293315d72193d790"},{url:"img/CARB-X.png",revision:"e572e0ea6484f3bcf0cc2717877d1023"},{url:"img/CDC_-_Centers_for_Disease_Control_and_Prevention.png",revision:"59998e05644bae22097848ae0251728f"},{url:"img/CDC_Foundation.png",revision:"1265dd76e00ea86f19ba5ae6132a97fd"},{url:"img/CDDEP_-_The_Center_For_Disease_Dynamics,_Economics_&_Policy.png",revision:"846aa43d751701d0b6805df29c9c7bea"},{url:"img/CEPI_Coalition_for_Epidemic_Preparedness_Innovations.png",revision:"175e453399fac1d109797c48844b8aeb"},{url:"img/CGD_-_Center_for_Global_Development.png",revision:"a6ca3d109ad90fabea7422e695ed14cc"},{url:"img/CNN.png",revision:"9cc37c499504cc1ccbd7d7122f2bc0cb"},{url:"img/COTA_for_older_Australians.png",revision:"88daff829ee6f361f4d6e8b854473bb4"},{url:"img/COVAX.png",revision:"fb962fbf7c1b3c2effdae0af3245bfcf"},{url:"img/COVID_Collaborative.png",revision:"9c5b7f986a0025e3a8175b559ce21330"},{url:"img/CSIS_-_Center_for_Strategic_and_International_Studies.png",revision:"b21202e98f8eebcf36e53307c55730a3"},{url:"img/Caltech_-_California_Institute_of_Technology.png",revision:"fcaf8cbb493c362b7052d94dde7f9a76"},{url:"img/Camilla_Stoltenberg.png",revision:"46178c2dbdf2a8dbb2824a86b9e5c901"},{url:"img/Care_International.png",revision:"82e70acfca4660941140433fc474cd62"},{url:"img/Cari_Tuna.png",revision:"b0d735086fd8a1888d7f7754943e1b22"},{url:"img/Carlos_Morel.png",revision:"dff49bca7e0e53080d133ece2f08f4bb"},{url:"img/Carolyn_Ainslie.png",revision:"e64cea3131c5cc655de697386de33dde"},{url:"img/Center_for_Global_Health_Science_and_Security_at_Georgetown_University.png",revision:"c8e1a307292192c5b047d81da0ba8a7c"},{url:"img/Center_for_Infectious_Disease_Research_-_Seattle_Biomedical_Research_Institute.png",revision:"b3abb934bcf18e557497321e1c72df52"},{url:"img/Cerner_Corporation.png",revision:"7a03bbf6f431a31d4e0fd805840074c7"},{url:"img/Charite_Berlin.png",revision:"495d8b0fd0294fca517c8c027c4228dd"},{url:"img/Chatham_House.png",revision:"d1d0a0e248af1900d083e412f8354ddb"},{url:"img/China_CDC_-_Chinese_Center_for_Disease_Control_and_Prevention.png",revision:"ed64d19987fd577555342078da82c912"},{url:"img/Chinese_Society_of_Biotechnology.png",revision:"341df8886cfe3ed6a6c9adbd380eb7c9"},{url:"img/Christian_Drosten.png",revision:"c060028f492ffcfcd712e622715f8e3f"},{url:"img/Christine_Grady.png",revision:"35c0c28b4fd4bf57ca14151c0cd30ee6"},{url:"img/Christoph_Benn.png",revision:"086bbe394574d1c2137289f6b794234e"},{url:"img/Christopher_Elias.png",revision:"8e4df22df6be2b3afbd144fe0550fa6e"},{url:"img/Cilla_Snowball.png",revision:"0a759a88208d3fe4d77ff7032d5d769e"},{url:"img/Citi.png",revision:"01c548182bf690bc7607f712cf5c1b70"},{url:"img/Council_on_Foreign_Relations.png",revision:"4cb2127c40cc11fc1901026bb9fbbb92"},{url:"img/CureVac_AG.png",revision:"8d540d670fa2aca9cc46ff1ec389a8f7"},{url:"img/DIE_Deutsche_Institut_für_Entwicklungshilfe.png",revision:"97f84a6f978f6b3e0eaa3bfb861df84b"},{url:"img/DSW_-_Deutsche_Stiftung_Weltbevoelkerung.png",revision:"f9c3b3dbbef9874d366021f6b6c88cde"},{url:"img/Dan_Wattendorf.png",revision:"1436ee77b037a81f717e6be15a90411a"},{url:"img/Daniel_Camus.png",revision:"4c3c942d80af735d8df89a8ad2088a72"},{url:"img/Danil_Mikhailov.png",revision:"1c5dcde9d12f13a5fbc1c831a7292874"},{url:"img/David_Brandling-Bennett.png",revision:"e100e4fa3df70a3bd444443ca8c20266"},{url:"img/David_Fleming,_MD.png",revision:"01fc03c838daa83b5d127bc463b15525"},{url:"img/David_L._Heymann.png",revision:"002600b663eea0ef3f2e13d1ae140c8e"},{url:"img/David_Mukanga.png",revision:"2e12078bd5cffaa378b15a6ac62ae663"},{url:"img/David_Russow.png",revision:"f88c9973271c4e6b180b4f8d4b35948a"},{url:"img/Deutsche_Bank.png",revision:"31db83832b3d58bb410f495bd44f9565"},{url:"img/Developing_Countries_Vaccine_Manufactures_Network_(DCVMN).png",revision:"77c66bfd34a11639b67bd3167135ead3"},{url:"img/Duke_University.png",revision:"4a1f07cf05d287345b3aab8d9b73a91d"},{url:"img/Dustin_Moskovitz.png",revision:"49abeb354b1c07037b4358d0117fd206"},{url:"img/EACHR_-_WHO_Global_Advisory_Committee_on_Health_Research.png",revision:"6c3e98c87b7d7faa5214f430daa8693b"},{url:"img/ECFR_-_European_Council_on_Foreign_Relations.png",revision:"71726d58c4f0c7a8c17d9c9d3deae704"},{url:"img/EDCTP_-_European_&_Developing_Countries_Clinical_Trials_Partnership.png",revision:"93e76298aea040d3c7b1c0c5c4968891"},{url:"img/EU_-_European_Union.png",revision:"81f4e58fa85c81cbe9857eb3ed8c4f7a"},{url:"img/EcoHealth_Alliance.png",revision:"bc6c8cee16dd103a282ddb4b04241cd0"},{url:"img/Ed_Whiting.png",revision:"ab37e281450502c49bf281e554bfc869"},{url:"img/Edelman.png",revision:"b324d826705f0ae3c0f7561c929a3336"},{url:"img/Eduardo_Martinez.png",revision:"ba6c64f4f3dd650110037867154eea73"},{url:"img/Elhadj_As_Sy.png",revision:"41720035e661e475e30023d015d8b09d"},{url:"img/Emer_Cooke.png",revision:"4a118fedc590536ae228e2ae9c525e45"},{url:"img/Emory_University.png",revision:"e7e3a85e7634a0176e70e40a31447410"},{url:"img/European_Commission.png",revision:"d5b7bcf22dabc6e3fd3e8e48c0f01ce3"},{url:"img/European_Vaccine_Initiative_(EVI).png",revision:"a5bd7d01678f4fa4e4a29349689c4e51"},{url:"img/Eurosurveillance_editorial_board.png",revision:"68644c0f2015cdb21c0d2d2b0337cc75"},{url:"img/Event_201.png",revision:"46b19a849bf2a9fc4d75a79b2cdb76f4"},{url:"img/Evotec_-_Just-Evotec_Biologics,_Inc..png",revision:"df998181aa3b508bf9bd9d16f6e869e5"},{url:"img/Exemplars_Health.png",revision:"bc63aa208659ba90c3ff8235078110e1"},{url:"img/FDA.png",revision:"61a7e05733c7e68f132357eafb262f16"},{url:"img/FIND.png",revision:"129ddf7df53e21d8adc29bd4971e20b8"},{url:"img/FP2020_-_Family_Planning_2020.png",revision:"415a0083c4b3c2a7d4d000520c109103"},{url:"img/FP2020_Reference_Group.png",revision:"415a0083c4b3c2a7d4d000520c109103"},{url:"img/Facebook.png",revision:"406cda5b148084aadb894155a588d29e"},{url:"img/Fauci_Leaked_E-Mails.png",revision:"96acf8d9907cc528c31b740a6580c37d"},{url:"img/FirstDraft.png",revision:"ca876cda952c32bd2a2903e14f60d919"},{url:"img/Fondation_EURACTIV.png",revision:"f41c144ac7029cb9fa130be105ddaee1"},{url:"img/Fred_Hutchinson_Cancer_Research_Center.png",revision:"38bdef56db33e9c13cc9257396cc1a96"},{url:"img/GARDP_-_Global_Antibiotic_Research_and_Development_Partnership.png",revision:"84d115247d58a15bf5469ed19971e386"},{url:"img/GAVI.png",revision:"187faf6d1e58ec5ed202e5f8dbbd03f8"},{url:"img/GFF_-_Global_Financing_Facility_(World_Bank).png",revision:"f7668ea6be1fb7a5b9531ea6637fa069"},{url:"img/GIZ_Deutsche_Gesellschaft_für_Internationale_Zusammenarbeit.png",revision:"3f74241a7c9d4e3b9b6de7fff2529f93"},{url:"img/GPEI_-_Global_Polio_Eradication_Initiative.png",revision:"be56db4f77224fbfa1b19b44993042b5"},{url:"img/GPMB.png",revision:"2365f772ddc6c502a34b09547b1a3115"},{url:"img/GVP_-_Global_Virome_Project.png",revision:"c5076ea37e0ce0aaa9f12e9f1f902f29"},{url:"img/Gargee_Ghosh.png",revision:"e3693f9d90a141fa74070c29dea897f6"},{url:"img/Gary_Nabel.png",revision:"d591801bb0acf31407396705a68ddf7e"},{url:"img/Gayle_E._Smith.png",revision:"62f8ec170f46ee6aec78215438253613"},{url:"img/Genya_Dana.png",revision:"fc6b81a48aeba6404363e7b7f343611a"},{url:"img/Georg_F_Gao.png",revision:"42f2bf497b46a677551b956ad8d29ad8"},{url:"img/Ginkgo_Bioworks.png",revision:"11c2d088477020af224ee1214f910b97"},{url:"img/GloPID-R_-_Global_Research_Collaboration_for_Infectious_Disease_Preparedness.png",revision:"df1775bca80b8d7743f9fb21f8c48f0b"},{url:"img/Global_Citizen.png",revision:"84991f18bc7a8e90499ace97f5a81477"},{url:"img/Global_Health_Council.png",revision:"0a3b9c554180672dd8360a656df8bdd4"},{url:"img/Global_Health_Hub_Germany.png",revision:"c277a4775b8f746f951d66c040e730bf"},{url:"img/Global_Viral.png",revision:"c0527e019902cc093d6ea09dfde01679"},{url:"img/Google.png",revision:"00f249e80b100cc6278e7da1dc018d4d"},{url:"img/Grand_Challenges_Canada.png",revision:"5fab70b84231765c55aadda772b94d00"},{url:"img/Gro_Harlem_Brundtland.png",revision:"7337fc0164a6ea5b76b49a8a279fda5e"},{url:"img/GsK_GlaxoSmithKline.png",revision:"4930af3da6033bc951a20f48790491b5"},{url:"img/HZI_-Helmholtz-Zentrum_für_Infektionsforschung_GmbH.png",revision:"f4e7f6ad9ed58e405b569af55731cfec"},{url:"img/Hannah_Kettler.png",revision:"b81174f3e5737c9be4eed31e67abf8ba"},{url:"img/Harvard_School_of_Public_Health.png",revision:"0f81f05c7f8ee2c6edac2574577beb60"},{url:"img/Hasti_Taghi.png",revision:"1a5568494db7634418a58c8f6e2e47d6"},{url:"img/Health_Alliance_International.png",revision:"da20e6ced1e61a465e45ef3f1f49b212"},{url:"img/Health_Metrics_networks,_die_Global_Health_Workforce_Alliance.png",revision:"661f1eb145e3f3892b3592904dbf937d"},{url:"img/Heidi_Larson.png",revision:"29c3d4253adedceea049cf8aaa4eebca"},{url:"img/Hilleman_Laboratories.png",revision:"d09bc77e11bafbb7ce1cee010fcb66e5"},{url:"img/Hope_Street_Group.png",revision:"58f82b52ba26224cb4d5c75136fe0ba2"},{url:"img/IANPHI_-_The_International_Association_of_National_Public_Health_Institutes.png",revision:"7083e47a4c18a3a9c69739cdd153c9ef"},{url:"img/IAVI.png",revision:"8bd221ba64643b89ea3edf172b6ed538"},{url:"img/IBB_-_Investitionsbank_Berlin.png",revision:"961955912edbf9663754b9435cc8be96"},{url:"img/IBRD_-_International_Bank_for_Reconstruction_and_Development_(World_Bank).png",revision:"1da081ea4c10f891bf9a4d6bf2a6bd9b"},{url:"img/ID2020.png",revision:"557fddcd949229b71c3bc739ef6f39d6"},{url:"img/IDA_-_International_Development_Association_(World_Bank_Group).png",revision:"ca6b2ca9f1f911036aef8c152ba1d0f6"},{url:"img/IDEO_ORG.png",revision:"f6c2592412b59bf69e5ad3c62305fa90"},{url:"img/IDRI_-_Infectious_Disease_Research_Institute.png",revision:"a9560fe21d212f13b0ec040b87a6cfe4"},{url:"img/IFC_Internation_Finance_Corporation.png",revision:"e25da9c06ea08d234b0f7d80f9f114b3"},{url:"img/IFFIM_-_International_Finance_Facility_for_Immunisation.png",revision:"430ab222f4aaf5df9be4584a4c830470"},{url:"img/IFPMA_-_International_Federation_of_Pharmaceutical_Manufacturers_&_Associations.png",revision:"3bcacfd7835a244a0c43767550b0beba"},{url:"img/IHME_-_The_Institute_for_Health_Metrics_and_Evaluation.png",revision:"e0a58d76f5ca76472aa1f34dbe52b767"},{url:"img/INDEPTH.png",revision:"3bb507decc7977f229c68b225e634a0e"},{url:"img/IRC_-_International_Rescue_Committee.png",revision:"f0a388ee36f6cd48de5d76384d55f119"},{url:"img/IS_Global_Barcelona_Institute_for_Global_Health.png",revision:"6a14a500b2f2e787d9568f584d94fb08"},{url:"img/IVI_-_International_Vaccine_Institute.png",revision:"e1614b47de5532349e5b8fc48a797c92"},{url:"img/Ifakara_Health_Institute.png",revision:"73ae6d4eaea04c258474cdc5b6227d3b"},{url:"img/Illumina.png",revision:"896175d4448795a0eead6161a3ffaceb"},{url:"img/Ilona_Kickbusch.png",revision:"c46d72440d532e8df2a057c29a454326"},{url:"img/Imperial_College_London.png",revision:"0ace3fccfcecc7c1de31dd78cc473235"},{url:"img/Infect_Control.png",revision:"14a2b8973b92668cc18331ce2dc0e2ec"},{url:"img/International_Advisory_Board_on_Global_Health.png",revision:"7f55ebd0a20ff96cf911a5b93704b04e"},{url:"img/Islamic_Development_Bank.png",revision:"8eae8abb0ab5e7eb59b5de4a7e8ea01e"},{url:"img/Jaime_Yassif.png",revision:"aac4b612e748adeea674c630e90f0bdd"},{url:"img/Jamie_Drummond.png",revision:"25a0ba72bf7a40b7f376cb642b345394"},{url:"img/Jane_Halton.png",revision:"2257c36b870154c72d35d1f81e915d66"},{url:"img/Jeffrey_Sachs.png",revision:"a27e9af93e05f11051ed462ab5f8fb42"},{url:"img/Jenner_Institute.png",revision:"e28dad0687a7e115c5b64427bc2d57dc"},{url:"img/Jennifer_Gardy.png",revision:"61984b7e33d1b1b8bfb2b7aa2968bee5"},{url:"img/Jens_Spahn.png",revision:"8124fa2ef57811ee50d4921e36fb739c"},{url:"img/Jeremy_Farrar.png",revision:"b0575eabd8885621de2772f88b596c85"},{url:"img/Jeremy_Veillard.png",revision:"780fd60302d8edccc9c6ca354ba908e9"},{url:"img/Joe_Cerrell.png",revision:"ae07f378ebea9a72498fee19aa0ba947"},{url:"img/John_Hamre.png",revision:"ba16dda7268fd876ae1903e3fa3ed026"},{url:"img/John_Hopkings_Bloomberg_Public_Health_Security.png",revision:"0e44d8e21f056d6eecb5303e14d2a908"},{url:"img/John_Nkengasong.png",revision:"c5fa0a856dc94474a20cadcd2628b902"},{url:"img/Johnson_&_Johnsen.png",revision:"5b1472cde84e4b8106b1d918e6e07fd0"},{url:"img/Julie_Louise_Gerberding.png",revision:"79a52c099a16669dcb44bbae6390c7d4"},{url:"img/KIT_Royal_Tropical_Institute.png",revision:"1d97b53e0ab06bf2f0d3e7a628bbb1c0"},{url:"img/Karl_Hofmann.png",revision:"3a3d48a916b3f2d6629a5c7abad985af"},{url:"img/Kate_Robertson.png",revision:"5819c958051ad9fc187adddee6f98c63"},{url:"img/Kizzmekia_S._Corbett.png",revision:"11c6da0df1d2f5c3e697e876b165d39e"},{url:"img/Klaus_Schwab.png",revision:"5e7a526837c527e1329969c44802e4b4"},{url:"img/Kofi_Annan.png",revision:"b38c1941aa8550cc8492117f4d636c3a"},{url:"img/Leopoldina.png",revision:"1e960fcedcb3da23b4a9dc0c58d8b982"},{url:"img/London_School_of_Hygiene_&_Tropical_Medicine.png",revision:"c58ada5efdf539a5e274ffd399900f97"},{url:"img/Lothar_H._Wieler.png",revision:"c3514425fe66fb9b21d225a0aa0be3cf"},{url:"img/MMV_-_Medicines_for_Malaria_Venture.png",revision:"0d989fcf319be8b0d685d116c0b6dc19"},{url:"img/MSD_-_Merck.png",revision:"8b6f8314435a7a592e2b7e8bc27b89ce"},{url:"img/MSI_Reproductive_Choices_-_Marie_Stopes_International.png",revision:"ca0f8c094b52ed3b2fe715f73e4f2577"},{url:"img/Mamta_Murthi.png",revision:"60d87b7b947344f1b174a1790e4764ec"},{url:"img/Marc_Lipsitch.png",revision:"db29379e6aa2ef9e71a6f9b72e2845c7"},{url:"img/Marcel_Tanner.png",revision:"2747d53821ef68a70914de061cefbcaa"},{url:"img/Margaret_A._Hamburg.png",revision:"f24e3973be5f4c831c4ff9ccf9de17ad"},{url:"img/Maria_van_Kerkhove.png",revision:"7851d57e510f237a76b21d49cfd85b51"},{url:"img/Mark_Kessel.png",revision:"af46df576f9d723b2fe93e735f0e2c51"},{url:"img/Matshidiso_Moeti.png",revision:"8b9dfc841253cffaa9a6cb3dc0dece19"},{url:"img/Max_Planck_Society_for_the_Advancement_of_Science_EV.png",revision:"296be8b3dc129da8d7845844f2f0e348"},{url:"img/McGill_University.png",revision:"18c4d5f6cb6e4f22f85790be95360402"},{url:"img/Melinda_Gates.png",revision:"b2b00b683b0abf52628692e346b77e7c"},{url:"img/Michael_Watson.png",revision:"7fc5a87d49b8bfa05cefbe419958ce66"},{url:"img/Microsoft.png",revision:"8b8d1048f541840759dac0d28196527d"},{url:"img/Mike_Ferguson.png",revision:"5583ce1bebdaaacce3cf733432b3a6a2"},{url:"img/Morton_H._Halperin.png",revision:"242c5c863cbce1519bdbdcc14213819f"},{url:"img/Muhammad_Pate.png",revision:"340cc82848e316e386ed3edc47f6ffe0"},{url:"img/Munich_Security_Conference_-_Sicherheitskonferenz_München.png",revision:"b3de2e73f407e8da0ffdfd39aa36e907"},{url:"img/NAM_-_National_Academy_of_Medicine.png",revision:"8628f837642af4dc053ab6ffb1179b23"},{url:"img/NAS_-_National_Academy_of_Sciences.png",revision:"43e4b52392b73f4e463b6f3b39995001"},{url:"img/NEA_-_New_Enterprise_Associates.png",revision:"d5d6ee3e72e3c8aacc954bbedaf1fde9"},{url:"img/NIAID_-_National_Institute_of_Allergy_and_Infectious_Diseases.png",revision:"0b18f9b2f672aa2de73245ed80952ded"},{url:"img/NSFC_-_National_Natural_Science_Foundation_of_China.png",revision:"448a8d5d2e310fe46f0983c469140d05"},{url:"img/NTI_-_Nuclear_Threat_Initiative.png",revision:"5c24788f7ecfce0cf20deb8418583fc3"},{url:"img/Nathan_D._Wolfe.png",revision:"f16388e4cab680cacd933ef82b5feff4"},{url:"img/National_Academies_of_Sciences,_Engineering,_and_Medicine_-_Standing_Committee_on_Emerging_Infectious_Diseases_and_21st_Century_Health_Threats.png",revision:"4a6b4f19920732f0c1e38d7535cbbeaf"},{url:"img/New_Venture_Fund.png",revision:"9fae7bb6d0427508a9c816eb01e105cf"},{url:"img/Ngozi_Okonjo-Iweala.png",revision:"11c22f333f9e64f8a6a50c2546d46df4"},{url:"img/Nikolaj_Gilbert.png",revision:"8914cde1d2a743a84a572e58d431d1d1"},{url:"img/Nilmini_Rubin.png",revision:"d6ab6136b001e7658d6ab089219b8156"},{url:"img/Novartis.png",revision:"632d20ae354775a782791106374513f0"},{url:"img/Novartis_Foundation.png",revision:"632d20ae354775a782791106374513f0"},{url:"img/OECD_-_Economic_Co-operation_and_Development.png",revision:"7d58e0fb8b442e1a095c033bdb994c4a"},{url:"img/ONE.png",revision:"774a02746a5ab669416f74e28e28577c"},{url:"img/OUCRU_-_Oxford_University_Clinical_Research_Unit.png",revision:"d74bf20aa135833bfb774bc685f7ea2f"},{url:"img/Observer_Research_Foundation.png",revision:"cd41a33a3ceb39dfde634e9a11cd2a40"},{url:"img/One_Young_World.png",revision:"524b3fc6fdce48d4dff5df871485e1d4"},{url:"img/One_world_Together_At_Home.png",revision:"63cf491df00b159900ea245bae408603"},{url:"img/Open_Philanthropy.png",revision:"52345e142cf95bbaf7684e5ad0bb3b0b"},{url:"img/Orin_Levine.png",revision:"a48ee66528a40fcfd75768b5934e0ff4"},{url:"img/Oxfam-America_Inc.png",revision:"a563290a49ff3bc9c35c627b6617a7ea"},{url:"img/Oxford_Policy_Management.png",revision:"bd117454a3979fd256774d20409b1977"},{url:"img/P._Murali_Doraiswamy.png",revision:"0f2e22abb02f65b7c1adb08d7f9e0def"},{url:"img/PATH.png",revision:"2b10382c024c787bae1ea08df1d66032"},{url:"img/PEI_Paul-Ehrlich-Institut.png",revision:"64b698b0e8e9bf78670372c72621a5b9"},{url:"img/PEPFAR.png",revision:"53aee18a1cea7976325235756d78ab33"},{url:"img/PHCPI_-_Primary_Health_Care_Performance_Initiative.png",revision:"2caeb727fe250db09af92cbec3ccf200"},{url:"img/PSI_-_Population_Services_International.png",revision:"e5eed3f0b0ad6ed6757c7b8e34d758e1"},{url:"img/Pasteur_Institute.png",revision:"3c7867b6ec340c711836f8186de88d68"},{url:"img/PathAI.png",revision:"6cc5e3952523d7e171a09b9737a0d822"},{url:"img/Peter_A_Singer.png",revision:"dbc30fa8d7292aa66dfb43e37b821b78"},{url:"img/Peter_Daszak.png",revision:"7a9cefcfa6e3cdaee8d8196b7a13c9b8"},{url:"img/Peter_Piot.png",revision:"9aae6ac89517e0d4e393b904afd1ad13"},{url:"img/Peter_Sands.png",revision:"4d0a067c889993366513acf388b2c0cf"},{url:"img/Pew_Research_Center.png",revision:"1e52511e545d6be55c746f5a6d5df0f3"},{url:"img/Pfizer.png",revision:"4b3c772f559fb92af669d413e2d367e5"},{url:"img/PharmAccess_Foundation.png",revision:"6c4feb5c1fe56b1f6a41d223cd56837b"},{url:"img/R4D_-_Results_for_Development.png",revision:"f4922b4563d09ae1c7a9d2cb44c5ebce"},{url:"img/RAND_Corporation.png",revision:"c4a99ddba475b9877bffafa7666025bd"},{url:"img/READDI_-_Rapidly_Emerging_Antiviral_Drug_Development_Initiative.png",revision:"4639603da10cfbe1c9630a7fd43e3faa"},{url:"img/RED.png",revision:"52192bce17680e95d7f2cb332a8a5777"},{url:"img/RESULTS_Educational_Fund.png",revision:"8c2a378b6a24a6d727a3eabda8c1dc24"},{url:"img/RKI_-_Robert_Koch_Insttitute.png",revision:"2945c4f78a986eecc690e46028d1c43b"},{url:"img/RORI_-_Research_On_Research_Institute.png",revision:"9e1d265186899f1dc30d985af941c28d"},{url:"img/RWJF_-_Rober_Wood_Johnson_Foundation.png",revision:"9306f1a8fbb6ec235213bebfef559e73"},{url:"img/Rachel_Graham.png",revision:"843a3046e1a41ef79367dead5bc9cdec"},{url:"img/Rajiv_Shah.png",revision:"3fe745c0cb3821f443dd3a95ff319a3b"},{url:"img/Ralph_S._Baric.png",revision:"bdb6838511aee41cf4f1397debc10ae1"},{url:"img/Ramanan_Laxminarayan.png",revision:"4677360eb19428ac682ac799f5b8c20b"},{url:"img/Regina_Rabinovich.png",revision:"16a50098a210ead1ef48bc8f04c69aef"},{url:"img/Resolve_to_Save_Lives.png",revision:"b7dfe627557a960c15bc1b9f5901e500"},{url:"img/Richard_D._Klausner.png",revision:"037ea2fbe3d6ac1ecf72aa27fc558ad7"},{url:"img/Richard_Gillingwater.png",revision:"ab391c94e6ba60b1579668fbc9ff1d63"},{url:"img/Richard_Hatchett.png",revision:"8c50ca158e71bf8f05da9879e478c579"},{url:"img/Rizal_Sukma.png",revision:"3cc477c0911187cf62f99f62b334ab97"},{url:"img/Roche_Group.png",revision:"673a6161969f5eb000c62fc81f6280ac"},{url:"img/Rockefeller_Philanthropy_Advisors.png",revision:"796014a667d4048f28da7fc24d667646"},{url:"img/Rockefeller_University.png",revision:"9b898eb275f64ac0766d14097ba9ec52"},{url:"img/Rommelag.png",revision:"823b22ee7d0e0d3ce102612b398690a5"},{url:"img/Ryan_Morhard.png",revision:"799185c96bae51d6964427ddc025769c"},{url:"img/SEEK_Development,_Strategic_and_Organizational_Consultants_GmbH.png",revision:"af6075ca6672749d5c9b2d1235313d93"},{url:"img/Sabin_Vaccine_Institute.png",revision:"7e68e66eb5af49861de1b7f3d986c6d0"},{url:"img/Salesforce.png",revision:"a014d164c0e224512711c149912056d5"},{url:"img/Sania_Nishtar.png",revision:"9b620634932d45f03636db3fa4058d4c"},{url:"img/Sanofi.png",revision:"2cdc4195985baca31a71996f956c45d5"},{url:"img/Save_the_Children.png",revision:"f21504e518400a6805d0635326bef0b3"},{url:"img/Saving_Lives_At_Birth.png",revision:"fd3b44a9e3eaccf2d0bf4f100027ce0e"},{url:"img/Scott_Gottlieb.png",revision:"836df9e5aa01e357aee1d367d623c9d9"},{url:"img/Sergio_Carmona.png",revision:"af1b79da531c54eeba42bf27da919d1d"},{url:"img/Seth_Berkley.png",revision:"e44d3c0f45c2d095376daee9a0d9fff3"},{url:"img/Sheila_D._Tlou.png",revision:"3e93048fdb30f1e4f64480da9652188e"},{url:"img/Sheila_Redzepi.png",revision:"1e9d428a4473e42afcb9a26513ab7433"},{url:"img/Sheryl_Sandberg.png",revision:"fdfb9859f7059979a0a303e39d717b87"},{url:"img/Shobana_Kamineni.png",revision:"759eeb032209ebfda224f7e22a0b07fd"},{url:"img/Soumya_Swaminathan.png",revision:"b6a666ba634e9905a92fc667ed514b24"},{url:"img/Spiegel.png",revision:"8d1a82558ef97574e2b7f1dad844d0ba"},{url:"img/Steven_VanRoekel.png",revision:"4a23c759f3bb485ea1e286e65bcddc7c"},{url:"img/Suraya_Dalil.png",revision:"dc6e12cd60c08a4d717f8dc1c068bf7b"},{url:"img/Susan_Desmond-Hellmann.png",revision:"aa433750af2e122447f5c9ee42073768"},{url:"img/Sylvia_Mathews_Burwell.png",revision:"4c836ebef96c01ae83c0e734858f9ed0"},{url:"img/TDR_-_Special_Programme_for_Research_and_Training_in_Tropical_Diseases.png",revision:"7b99670dc9ced69ed6fe4a3eed24ff96"},{url:"img/TED_Foundation.png",revision:"1d5ed927bd71ec4423eefa5a1079be26"},{url:"img/Tachi_Yamada.png",revision:"48e23bec9da81c492a70aa536e689c58"},{url:"img/Takeda_Pharmaceutical_Company_Limited.png",revision:"cc45d29e9352b3c100cf19241301f8c1"},{url:"img/Tedros_Adhanom_Ghebreyesus.png",revision:"effac4170831ec7fb7aa961c695c1aa6"},{url:"img/Tempus.png",revision:"1f143fd620533e322ff97af4bea4209d"},{url:"img/The_Broad_Institute.png",revision:"3eb8e1ecfd3d5a1fd9aedd95d28f675c"},{url:"img/The_Commonwealth_Fund.png",revision:"3a7190dd57df551e83b977108449068f"},{url:"img/The_Global_Fund.png",revision:"e8e9c30572204136844d41f6b64cf3f8"},{url:"img/The_Global_Goals.png",revision:"f5a0f4fb91563655771c3709533b80dc"},{url:"img/The_Global_Good_Fund.png",revision:"d8e627ffb7c1df27f59af89528c60a0f"},{url:"img/The_Global_Shapers_Community.png",revision:"94d05bc13d492cd5925b485a593cca00"},{url:"img/The_Guardian.png",revision:"a4c4163992b46f2c57b46bd7b5c05b82"},{url:"img/The_Inclen_Trust_International.png",revision:"1e9ef828ca6e403d463a3c49f9d2e7db"},{url:"img/The_King_Baudouin_Foundation_United_States_(KBFUS).png",revision:"7bf21c7126252064bce9d17a36d515dd"},{url:"img/The_National_Academy_of_Medicine.png",revision:"8628f837642af4dc053ab6ffb1179b23"},{url:"img/The_Nature_Conservancy.png",revision:"c2d319f637b2ecd3ec245c8ebfbe7b3f"},{url:"img/The_Pirbright_Institute.png",revision:"c97bf186a4da5dfde2d3f516e713c58c"},{url:"img/The_Rockefeller_Foundation.png",revision:"eadde77676f5d987125fdbddd529c04e"},{url:"img/The_Simons_Foundation.png",revision:"bc464d991c1572375a616198d82184dc"},{url:"img/The_Trilateral_Commission.png",revision:"b906b953b44d484dba47a61ac4159b4d"},{url:"img/The_University_of_North_Carolina_at_Chapel_Hill.png",revision:"db7b7e0b6f6398123499dbe5d8b714e4"},{url:"img/The_Urban_Institute.png",revision:"cbab759ce4102a8c8433540425649938"},{url:"img/Thinkwell_Institute.png",revision:"933d6eb6c4f5b9fd920d9dc63483d86e"},{url:"img/Thomas_J._Bollyky.png",revision:"44e3b05da2c109c8308981644bbe55f2"},{url:"img/Tim_Evans.png",revision:"041aadc51ca833b4281cc8cc4a5701ed"},{url:"img/Tobias_Kahler.png",revision:"573283347ee5166e9a79b7c115fd728e"},{url:"img/Todd_Summers.png",revision:"1b3e507238f380d7b041b699375d4eb7"},{url:"img/Tom_Frieden.png",revision:"c5f7c082e5d444a00e4c3ab4b77b5370"},{url:"img/Tom_Inglesby.png",revision:"35684dbeec1c4a5eb762cb95b30a1d7e"},{url:"img/Tracey_McNeil.png",revision:"0afbf30de259a015e8d4be1c124225e2"},{url:"img/Trevor_Mundel.png",revision:"97bcf958a65aae252d2ac5c0a44928d9"},{url:"img/Trinity_College.png",revision:"b7ce72a0a9a4eb691a7daf165253d77a"},{url:"img/Turnaround_for_Children,_Inc..png",revision:"7c1a9332d46c36ba8c9786a7db90ce81"},{url:"img/UHC2030.png",revision:"e5301d9b709f27c82584bc27d9a10b1c"},{url:"img/UKAID.png",revision:"20743acc5f0a06aa93667c4d1bd96b01"},{url:"img/UK_-_Pandemic_Preparedness_Partnership_(PPP).png",revision:"26cd82b222653ddfe0c9ace7f0c73028"},{url:"img/UK_MHRA_Medicines_and_Healthcare_products_Regulatory_Agency.png",revision:"f445b8e0983bbeeeaf27a03f621f94dd"},{url:"img/UNAIDS_-_United_Nations_Joint_Agencies_on_AIDS.png",revision:"933b6f2b74ecd3fffd077d0f459f95cb"},{url:"img/USAID.png",revision:"2f1a231f0325b6838292d2d6cb70262c"},{url:"img/US_National_Research_Council.png",revision:"cd2368d84e26d28c3e4e3cf661454757"},{url:"img/UnitAid.png",revision:"7760672369e7fa3b4a6b114317e3943f"},{url:"img/University_of_Birmingham.png",revision:"428bc16ad0ca21fb2356f6eb7d53e2ca"},{url:"img/University_of_Chinese_Academy_of_Sciences.png",revision:"250bbca66adf37897f8b55e3fa255db4"},{url:"img/University_of_Hong_Kong.png",revision:"7269205230ba48c7acede3beacfb63de"},{url:"img/University_of_Oxford.png",revision:"b06ec61fc18676c28c56593d11325572"},{url:"img/University_of_Washington_-_Department_of_Health.png",revision:"a0474599dd84fa5b718b71d1338c3c9c"},{url:"img/Ursula_Von_Der_Leyen.png",revision:"479f5d4659047f798ca5aabcc087affd"},{url:"img/VCP_-_Vaccine_Confidence_Project.png",revision:"b8c8250df92d66a92ba55613302f8fe4"},{url:"img/Vasee_Moorthy.png",revision:"0638b6b471c239eafafac80f956a03c1"},{url:"img/Victor_Dzau.png",revision:"8ef11bf4500168693cb46c7283024f39"},{url:"img/Vir_Biotechnology,_Inc..png",revision:"7605c03ccb415c21498f1768b61d319c"},{url:"img/WEF_-_World_Economic_Forum.png",revision:"361e8cf80b086accbcd6d578301dc17f"},{url:"img/WFPHA_-_World_Federation_of_Public_Health_Associations.png",revision:"54685f4f2eea815811164d65cd0bbbcd"},{url:"img/WGHA_-_Washington_Global_Health_Alliance.png",revision:"3caac2589ac5b631fefd7476198eeec8"},{url:"img/WHO_-_World_Health_Organization.png",revision:"c79304e4932925c8a9ef3cc64e6f14e5"},{url:"img/WHO_R&D_Blueprint.png",revision:"bfedab5b07495b734b606a32991e42bc"},{url:"img/WRI_-_World_Resources_Institute.png",revision:"141e96a20c8d7750ceef7ad5a199f17e"},{url:"img/WTI_-_World_Trade_Institute.png",revision:"a19f452b5ccd2ba458484d6fdc761142"},{url:"img/Warren_E._Buffett.png",revision:"0d9627ffc5c1634eb23e35fb66fe09bd"},{url:"img/Washington_State_University.png",revision:"36ba1063e14b0ffac679f2f2b91f2d5b"},{url:"img/Wellcome_Centre_for_Human_Genetics.png",revision:"b077ac3b2ec359eb2b4308f00be8c0e6"},{url:"img/Wellcome_Leap.png",revision:"053baaff7a51e2cb1ad2d78b78c88383"},{url:"img/Wellcome_Sanger_Institute.png",revision:"52f5e7ac97fd56c29756c7c36eeb856e"},{url:"img/Wellcome_Trust.png",revision:"49ac3bc830d962e3da1beb9598ba2baa"},{url:"img/William_and_Flora_Hewlett_Foundation.png",revision:"6ef27b4ada251cf2b4a150e3698bb426"},{url:"img/World_Alliance_for_Patient_Safety.png",revision:"74ae86d8c3a922b97cdcb4fe504dd802"},{url:"img/World_Bank.png",revision:"5124d4d842b3db9100f223da2769c2e0"},{url:"img/World_Bank_Blog.png",revision:"2fb10346ceea1b1c71d570096bd09855"},{url:"img/World_Vision.png",revision:"92baf3dca8aff99e56d39173991527ff"},{url:"img/YGL_-_Young_Global_Leaders.png",revision:"21b210caa92c0fd41513484cdc80f007"},{url:"img/arrow-right.png",revision:"dbaccdf0fce381049f68290e48d855f8"},{url:"img/data.org.png",revision:"840071921ac7bd899e00dda91ba7a6ab"},{url:"img/document.png",revision:"978fd015d86565650b67194cf309cd3d"},{url:"img/event.png",revision:"8857b437350dc5a9904169908e8d3760"},{url:"img/kfw_Entwicklungsbank.png",revision:"555cdf9d3a6b6930c23070a7d77aed0d"},{url:"img/moderna.png",revision:"05c3c45bbd558149b9d605c637cb2331"},{url:"img/placeholder.png",revision:"9ff8d51a31ae631822a5589386d13387"},{url:"img/unicef.png",revision:"57566a8e3403f58eec13f7430dafe2a7"},{url:"img/unicef_USA.png",revision:"7258fc8f985bdd06d237e74054314c3c"},{url:"img/world.png",revision:"0a500578b4d48854e557e233c147b845"},{url:"index.html",revision:"f4867f5559fb7ba7120ddf79fb757c36"},{url:"json/inside-corona.json",revision:"ba393615dac01c21a36870b427a7ab3b"},{url:"main.css",revision:"83b3741d7c6acfc44919a70ddfdbb33d"},{url:"main.js",revision:"29861a54d711ad266d916b5b6eb1156a"},{url:"robots.txt",revision:"316726d544e3a4532d86be44c5737667"}],{})}));
