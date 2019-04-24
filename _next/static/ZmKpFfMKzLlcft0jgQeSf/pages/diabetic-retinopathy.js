(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8QI0":function(e,a,t){"use strict";t.r(a);var s=t("MX0m"),r=t.n(s),i=t("q1tI"),l=t.n(i),n=(t("7lCG"),t("iWdS"),t("PgRs")),o=t.n(n),c=t("rM77"),m=t("5AcS"),d=t("aIN1"),h=t("zWEJ"),p=[{source:"./static/assets/diabetic-retinopathy/10004_left.jpg",data:{label:"No DR",sum_r:.000285714285714285,sum_y:.018857143,red_alert:!1,yellow_alert:!1,probs:{healthy:.908857143,mild:.0722857143,moderate:.0185714286,severe:.000285714286,proliferative:0}}},{source:"./static/assets/diabetic-retinopathy/10062_left.jpg",data:{label:"Moderate",sum_r:.072285714,sum_y:.618571429,red_alert:!1,yellow_alert:!0,probs:{healthy:.28142857,mild:.1,moderate:.54628571,severe:.04457143,proliferative:.02771429}}},{source:"./static/assets/diabetic-retinopathy/10125_right.jpg",data:{label:"Severe",sum_r:.029142857,sum_y:.731142857,red_alert:!1,yellow_alert:!0,probs:{healthy:.19685714,mild:.072,moderate:.702,severe:.02171429,proliferative:.00742857}}},{source:"./static/assets/diabetic-retinopathy/10219_left.jpg",data:{label:"Moderate",sum_r:.040285714,sum_y:.969714286,red_alert:!1,yellow_alert:!0,probs:{healthy:.00257143,mild:.02771429,moderate:.92942857,severe:.03142857,proliferative:.00885714}}},{source:"./static/assets/diabetic-retinopathy/10236_right.jpg",data:{label:"Proliferative",sum_r:.458164658,sum_y:.999714286,red_alert:!0,yellow_alert:!0,probs:{healthy:.000285714286,mild:0,moderate:.541549627,severe:.335714286,proliferative:.122450373}}},{source:"./static/assets/diabetic-retinopathy/10376_left.jpg",data:{label:"Mild",sum_r:.011142857,sum_y:.424285714,red_alert:!1,yellow_alert:!0,probs:{healthy:.251714286,mild:.324,moderate:.413142857,severe:.0108571429,proliferative:.000285714286}}},{source:"./static/assets/diabetic-retinopathy/10378_right.jpg",data:{label:"Proliferative",sum_r:.994,sum_y:1,red_alert:!0,yellow_alert:!0,probs:{healthy:0,mild:0,moderate:.006,severe:.06057143,proliferative:.93342857}}},{source:"./static/assets/diabetic-retinopathy/10446_right.jpg",data:{label:"Moderate",sum_r:.019714286,sum_y:.962,red_alert:!1,yellow_alert:!0,probs:{healthy:.01114286,mild:.02685714,moderate:.94228571,severe:.018,proliferative:.00171429}}},{source:"./static/assets/diabetic-retinopathy/10551_right.jpg",data:{label:"Mild",sum_r:.001142857,sum_y:.075714286,red_alert:!1,yellow_alert:!0,probs:{healthy:.54542857,mild:.37885714,moderate:.07457143,severe:.00114286,proliferative:0}}},{source:"./static/assets/diabetic-retinopathy/1071_right.jpg",data:{label:"Mild",sum_r:.001428571,sum_y:.755714286,red_alert:!1,yellow_alert:!0,probs:{healthy:.213142857,mild:.0311428571,moderate:.754285714,severe:.00114285714,proliferative:.000285714286}}}];a.default=function(e){return l.a.createElement("div",{className:"jsx-458499360 grid"},l.a.createElement(o.a,null,l.a.createElement("title",{className:"jsx-458499360"},"Synx - Impact on Healthcare.")),l.a.createElement(r.a,{id:"458499360"},[".small{font-size:0.95rem;padding:0.3rem 0;}",".study-illustration{margin:3rem auto;max-width:640px;}"]),l.a.createElement("div",{className:"jsx-458499360 grid-content"},l.a.createElement("div",{className:"jsx-458499360 grid-header"},l.a.createElement(m.a,{URL:e.URL}),l.a.createElement("section",{className:"jsx-458499360 subheader-content"},l.a.createElement("h1",{className:"jsx-458499360"},"Impact on Healthcare."),"A case on Diabetic Retinopathy."))),l.a.createElement("div",{className:"jsx-458499360 grid-content"},l.a.createElement("h2",{className:"jsx-458499360"},"Abstract"),"We developed an automatic screening/diagnostic system for diabetic retinopathy using an ensemble of deep neural networks followed by a random forest classifier. Our system has a sensitivity of 95% and a specificity of 65%.",l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement(h.a,{data:p}),l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("h3",{className:"jsx-458499360"},"Problem overview"),"Diabetic retinopathy (DR), a major microvascular complication of diabetes, has a significant impact on the world's health systems. In Mexico alone this disease affects more than 11 million people [1]. Globally, the number of people with DR will grow from 126.6 million in 2010 to 191.0 million by 2030, and it is estimated that the number with vision-threatening diabetic retinopathy (VTDR) will increase from 37.3 million to 56.3 million, if prompt action is not taken.",l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("br",{className:"jsx-458499360"}),"Despite growing evidence documenting the effectiveness of routine DR screening and early treatment, DR frequently leads to poor visual functioning and represents the leading cause of blindness in working-age populations. DR has been neglected in health-care research and planning in many low-income countries, where access to trained eye-care professionals and tertiary eye-care services may be inadequate. Demand for, as well as, supply of services may be a problem. Rates of compliance with diabetes medications and annual eye examinations may be low, the reasons for which are multifactorial [2].",l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("h3",{className:"jsx-458499360"},"Motivation"),"With the intention of developing an automatic diagnostic system for the screening of patients with possible diabetic retinopathy, we used recent advances in computer vision and deep learning to train an ensamble of neural networks to detect this disease and its level of progression.",l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("h2",{className:"jsx-458499360"},"Model overview"),l.a.createElement("h3",{className:"jsx-458499360"},"Data"),"For training and validation, 85,000 high-resolution images were used, each one consisting of a digital slit lamp capture labeled with its diagnosis made from a clinician, who rated the severity of the disease. Each image is labeled as being [0] no DR, [1] mild DR, [2] moderate DR, [3] severe DR or [4] proliferative DR. The per-class representation in the dataset is as follows:",l.a.createElement("table",{className:"jsx-458499360"},l.a.createElement("thead",{className:"jsx-458499360"},l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("th",{className:"jsx-458499360"},"Class"),l.a.createElement("th",{className:"jsx-458499360"},"Number of images"))),l.a.createElement("tbody",{className:"jsx-458499360"},l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"No DR"),l.a.createElement("td",{className:"jsx-458499360"},"62,920")),l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"Mild DR"),l.a.createElement("td",{className:"jsx-458499360"},"5,650")),l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"Moderate DR"),l.a.createElement("td",{className:"jsx-458499360"},"12,440")),l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"Severe DR"),l.a.createElement("td",{className:"jsx-458499360"},"2,020")),l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"Proliferative DR"),l.a.createElement("td",{className:"jsx-458499360"},"1,690")))),"The data was randomly divided between train (90%) and test (10%) sets. Test results were used for early-stopping during training and to choose some metaparameters of the neural networks. An example image from original data. An example image from original data.",l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("div",{className:"jsx-458499360 study-illustration"},l.a.createElement(c.a,{src:"./static/assets/diabetic-retinopathy/normal.jpg"})),l.a.createElement("h3",{className:"jsx-458499360"},"Preprocessing"),"The eye is detected and the image is rescaled and adjusted so that the eye is always in the center with a fixed size. RGB channels are locally normalized with a moving gaussian kernel in order to highlight local image variability. This allows the model to be agnostic to global light intensity and other factors depending on the particular camera used.",l.a.createElement("div",{className:"jsx-458499360 study-illustration"},l.a.createElement(c.a,{src:"./static/assets/diabetic-retinopathy/preprocessed.jpg"})),"An example image from original data. This image represent the final image from a Proliferative DR study used for neural network training.",l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("h3",{className:"jsx-458499360"},"Neural Networks"),"Several neural networks were trained using different architectures (InceptionV3, Resnet50). The training leveraged transfer learning from an Imagenet model, and was done in stages from the top-most layers gradually diminishing the learning rate. Two weeks of 2-gpu servers were used for the training of each model.",l.a.createElement("div",{className:"jsx-458499360 study-illustration"},l.a.createElement(c.a,{src:"./static/assets/diabetic-retinopathy/heatmap.jpg"})),"An example image from original data. After training, a neural network is capable to evaluate preprecessed images, this image shows the heatmap where damage is being found on a Proliferative DR patient.",l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("h3",{className:"jsx-458499360"},"Random Forest"),"We trained a Random Forest to combine the results of the different neural networks on both eyes of the patient with other statistics from the images, to predict the final probabilities that a particular image corresponds to a certain level of DR. This stage assigns to each image a vector with the probabilities of each class.",l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("h3",{className:"jsx-458499360"},"Label aggregation"),"Most guidelines recommend annual screening for those with no retinopathy or mild diabetic retinopathy, repeat examination in 6 months for moderate diabetic retinopathy, and an ophthalmologist referral for treatment evaluation within a few weeks to months for severe or proliferative diabetic retinopathy [3].",l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("br",{className:"jsx-458499360"}),"Following other studies such as [3], we define a negative case as no-DR or mild-DR, and a positive case as moderate, severe or proliferative DR. The vector of probabilities is therefore simplified into the probability of being a positive DR case. We can now create a ROC curve to choose the threshold for our prediction. A family of models with different sensibility and specificity. In figure X we can see the different possibilities. Among these we chose a model with 95% sensitivity and a corresponding 65% specificity so that it serves as a good first screening layer in a diagnostic pipeline.",l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("br",{className:"jsx-458499360"}),"In a similar fashion, we created a Red alert using only severe and proliferative DR as positive cases and looking for a sensitivity of 0.9. These two alerts, yellow and red have the following statistics:",l.a.createElement("table",{className:"jsx-458499360"},l.a.createElement("thead",{className:"jsx-458499360"},l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("th",{className:"jsx-458499360"},"Class"),l.a.createElement("th",{className:"jsx-458499360"},"Yellow alert"),l.a.createElement("th",{className:"jsx-458499360"},"Red alert"))),l.a.createElement("tbody",{className:"jsx-458499360"},l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"No DR"),l.a.createElement("td",{className:"jsx-458499360"},"18%"),l.a.createElement("td",{className:"jsx-458499360"},"1%")),l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"Mild DR"),l.a.createElement("td",{className:"jsx-458499360"},"57%"),l.a.createElement("td",{className:"jsx-458499360"},"2%")),l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"Moderate DR"),l.a.createElement("td",{className:"jsx-458499360"},"90%"),l.a.createElement("td",{className:"jsx-458499360"},"38%")),l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"Severe DR"),l.a.createElement("td",{className:"jsx-458499360"},"98%"),l.a.createElement("td",{className:"jsx-458499360"},"89%")),l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"Proliferative DR"),l.a.createElement("td",{className:"jsx-458499360"},"98%"),l.a.createElement("td",{className:"jsx-458499360"},"91%")),l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"No DR or Mild DR"),l.a.createElement("td",{className:"jsx-458499360"},l.a.createElement("b",{className:"jsx-458499360"},"35%")," ",l.a.createElement("div",{className:"jsx-458499360 small"},"(general specificity = 65%)")),l.a.createElement("td",{className:"jsx-458499360"},"1%")),l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"Moderate, Severe or Proliferative"),l.a.createElement("td",{className:"jsx-458499360"},l.a.createElement("b",{className:"jsx-458499360"},"95%")," ",l.a.createElement("div",{className:"jsx-458499360 small"},"(general sensivity)")),l.a.createElement("td",{className:"jsx-458499360"},"50%")),l.a.createElement("tr",{className:"jsx-458499360"},l.a.createElement("td",{className:"jsx-458499360"},"Severe or Proliferative"),l.a.createElement("td",{className:"jsx-458499360"},"98%"),l.a.createElement("td",{className:"jsx-458499360"},"90%")))),"Table 1. The probability of triggering the Yellow or Red alerts when the patient has a certain class level of retinopathy. We see that the Red alert is only likely to be triggered with Moderate, Severe or Proliferative DR. Yellow alert is more conservative and is able to detect 95% of all positive cases. In combination, both alerts can be extremely useful for the early detection of diabetic retinopathy.",l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("br",{className:"jsx-458499360"}),l.a.createElement("h3",{className:"jsx-458499360"},"Further steps for improving of the model performance:"),l.a.createElement("ul",{className:"jsx-458499360"},l.a.createElement("li",{className:"jsx-458499360"},"A more robust labeling following the example of [3] would definitely decrease the prediction error. In order to do this we will collaborate with a team of ophthalmologists for systematic robust diagnosis and localization of wounds."),l.a.createElement("li",{className:"jsx-458499360"},"During the Random Forest stage, the inclusion of additional data from the patients (such as glucose levels, age, etc) would be very valuable."),l.a.createElement("li",{className:"jsx-458499360"},"Currently the model uses an ensemble of 3 neural networks. Bringing this to at least 10 could prove very effective in increasing the accuracy of the model. In addition, working with larger (better resolution) images could allow us to detect smaller wounds. These two only amount to having more computing power during training."))),l.a.createElement(d.a,{hueRotation:e.hueRotation}))}},oZNC:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/diabetic-retinopathy",function(){var e=t("8QI0");return{page:e.default||e}}])},zWEJ:function(e,a,t){"use strict";t.d(a,"a",function(){return g});var s=t("9Jkg"),r=t.n(s),i=t("0iUn"),l=t("sLSF"),n=t("MI3g"),o=t("a7VT"),c=t("AT/M"),m=t("Tit0"),d=t("vYYK"),h=t("MX0m"),p=t.n(h),f=t("q1tI"),u=t.n(f),g=(t("YFqc"),t("7lCG"),t("iWdS"),function(e){function a(){var e,t;Object(i.default)(this,a);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return t=Object(n.default)(this,(e=Object(o.default)(a)).call.apply(e,[this].concat(r))),Object(d.a)(Object(c.default)(t),"state",{active:0}),t}return Object(m.default)(a,e),Object(l.default)(a,[{key:"onSelectImage",value:function(e){this.setState({active:e})}},{key:"render",value:function(){var e=this,a=this.state,t=this.props;return u.a.createElement("div",{className:"jsx-3020757400 apiviewer"},u.a.createElement(p.a,{id:"3020757400"},[".apiviewer-mini{border:0.25rem solid rgb(26,26,26);height:5.5rem;}",".apiviewer-mini img{height:5rem;width:7.5rem;margin:0;padding:0;}",".apiviewer-images-scroll{height:6.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".apiviewer-mini.-active{border:0.25rem solid #c6d5ff;}",".apiviewer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}",".apiviewer-selector{display:inline-block;-webkit-flex:1;-ms-flex:1;flex:1;width:50%;}",".apiviewer-result{background:#333;-webkit-flex:1;-ms-flex:1;flex:1;width:50%;padding:1.5rem;font-size:1rem;overflow-x:scroll;}",".apiviewer-images{overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;}","@media screen and (max-width:767px){.apiviewer{display:block;}.apiviewer-selector{display:block;width:100%;}.apiviewer-result{width:100%;}}"]),u.a.createElement("div",{className:"jsx-3020757400 apiviewer-selector"},u.a.createElement("img",{src:t.data[a.active].source,className:"jsx-3020757400"}),u.a.createElement("div",{className:"jsx-3020757400 apiviewer-images"},u.a.createElement("div",{style:{width:"".concat(8*t.data.length,"rem")},className:"jsx-3020757400 apiviewer-images-scroll"},t.data.map(function(s,r){return u.a.createElement("div",{onClick:e.onSelectImage.bind(e,r),key:s.source,className:"jsx-3020757400 "+"apiviewer-mini ".concat(t.data[a.active].source===s.source?"-active":"")},u.a.createElement("img",{src:s.source,className:"jsx-3020757400"}))})))),u.a.createElement("div",{className:"jsx-3020757400 apiviewer-result"},"// Example API Response",u.a.createElement("br",{className:"jsx-3020757400"}),u.a.createElement("br",{className:"jsx-3020757400"}),u.a.createElement("pre",{className:"jsx-3020757400"},r()(t.data[a.active].data,0,2))))}}]),a}(u.a.Component))}},[["oZNC",1,0]]]);