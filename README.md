# Awesome-Xpose-Datasets

A curated index of Head, Hand and Human pose datasets for 2D and 3D research. 中文数据集索引。

[Browse the site](https://voidvein.github.io/Awesome-Xpose-Datasets/) · [Pose research companion](https://voidvein.github.io/Awesome-Xpose-estimation/)

## 最近更新 · 2026-11-21（UTC+8）

- 新增 **[CORE4D](https://voidvein.github.io/Awesome-Xpose-Datasets/#dataset=core4d)**：两人协作搬移物体的时序三维数据。详情区分真实与合成序列，附 CVPR 2025 论文、官方演示、v2 动作数据入口，以及作者确认的非商用许可和时间对齐注意事项。

## Scope

63 datasets: Head 18, Hand 22, Human 24 (multi-category entries count once in the total). Counts are catalogue coverage, not a complete field census. Dataset versions may have different scales, access requirements and licensing. This repository links to original data; it does not host or redistribute it.

## Run and validate

Serve the repository root: `python -m http.server 8000`. No build or dependencies are required.

Run `node --check app.js && node scripts/test.cjs`.

## Data contract

`datasets.json` is the single source. Each record includes id, name, year, category (or categories), dimensions, summary, modalities, annotations, scale, access, license, official url, sources and notes. Unknown values are explicit. Years refer to the listed release/paper, not automatically the latest data version. Use multi-category arrays only when the same dataset is intended to appear in more than one subject; it remains one record.

## Catalogue

### Head

- **[ARKitFace](https://github.com/cbsropenproject/6dof_face#download-dataset)** · 2023 · 2D/3D — 基于 iPhone 11 采集的人脸图像及 ARKit 姿态与网格，面向单目透视重建和 6DoF 头姿。

- **[BIWI Kinect Head Pose](https://huggingface.co/datasets/ETHZurich/biwi_kinect_head_pose)** · 2013 · 3D — Kinect RGB-D 头部姿态基准，提供头部三维位置和旋转，适合 RGB、深度及跨模态头姿估计和人物独立评测。

- **[DAD-3DHeads](https://github.com/PinataFarms/DAD-3DHeads)** · 2022 · 2D/3D — 野外密集三维头部对齐数据，含头部顶点以及模型视图、投影矩阵。
- **[FaceSynthetics](https://github.com/microsoft/FaceSynthetics)** · 2021 · 2D — 可控制生成的人脸图像，提供关键点和像素分割，面向合成到真实迁移。
- **[LaPa](https://github.com/jd-opensource/lapa-dataset)** · 2020 · 2D — 将面部关键点与像素级语义分割结合，覆盖表情、姿态及遮挡变化。
- **[WFLW](https://github.com/wywu/LAB)** · 2018 · 2D — 包含姿态、表情、光照、妆容、遮挡和模糊变化的密集人脸关键点基准。
- **[LS3D-W](https://www.adrianbulat.com/face-alignment)** · 2017 · 2D/3D — 把现有二维人脸关键点通过模型转换为统一的三维标注约定。
- **[Menpo2D](https://github.com/jiankangdeng/MenpoBenchmark)** · 2017 · 2D — 分别处理半正面与侧面的人脸关键点定位基准。
- **[Pandora](https://aimagelab-legacy.ing.unimore.it/imagelab/page.asp?IdPage=14)** · 2017 · 3D — 面向汽车场景的头部中心、头姿与肩部姿态数据，包含 RGB 和深度序列。
- **[300W-LP](https://xiangyuzhu-open.github.io/homepage/)** · 2016 · 2D/3D — 通过人脸 profiling 扩展 300-W 的姿态范围，常用于三维对齐与头姿模型训练。
- **[AFLW2000-3D](https://xiangyuzhu-open.github.io/homepage/)** · 2016 · 2D/3D — 为 AFLW 前 2,000 个样本拟合三维人脸，用于大姿态三维对齐评测。
- **[MAFL](https://mmlab.ie.cuhk.edu.hk/projects/TCDCN.html)** · 2016 · 2D — 多属性人脸关键点数据，用于五点定位及属性辅助学习。
- **[300-VW](https://ibug.doc.ic.ac.uk/resources/300-VW/)** · 2015 · 2D — 针对长视频中的面部关键点检测与跟踪，覆盖光照变化及遮挡。
- **[MTFL](https://mmlab.ie.cuhk.edu.hk/projects/TCDCN.html)** · 2014 · 2D — 面部关键点与头姿、性别、微笑、眼镜属性的多任务学习数据。
- **[300-W](https://ibug.doc.ic.ac.uk/resources/300-W/)** · 2013 · 2D — 统一 68 点面部标注的野外人脸对齐基准；由多个既有数据集重标注及独立测试集构成。
- **[AFLW](https://www.tugraz.at/institute/icg/research/team-bischof/learning-recognition-surveillance/downloads/aflw)** · 2011 · 2D/3D — 网络野外人脸集合，含可见关键点、脸框及粗头姿标注。
- **[CMU Multi-PIE](https://www.cs.cmu.edu/afs/cs/project/PIE/MultiPie/Multi-Pie/Home.html)** · 2009 · 姿态标注维度待核实 — 受控多视点、多光照与表情的人脸数据，可用于跨姿态研究。
- **[Pointing’04 / Head Pose Image Database](https://crowley-coutaz.fr/Head%20Pose%20Image%20Database.html)** · 2004 · 3D — 以离散 pan/tilt 角度采集的经典单目头姿基准。

### Hand

- **[SHOW3D](https://huggingface.co/datasets/facebook/show3d-dataset)** · 2026 · 2D/3D — 在自然场景同步采集第一与第三人称视角，提供手物姿态，适合评估跨视角重建及接触建模。

- **[AnyHand](https://chen-si-cs.github.io/projects/AnyHand/)** · 2026 · 2D/3D — 已公开合成 RGB-D 手部与交互数据；详见条目中的规模冲突、深度来源及非商业许可说明。

- **[REACH](https://vision.ist.i.kyoto-u.ac.jp/research/reach/)** · 2026 · 3D — 面向房间角落远距离摄像机的三维手部姿态数据，利用隐藏胸前相机近景与固定相机几何信息生成标注，适合低分辨率、遮挡与手身协同研究。
- **[GigaHands](https://github.com/brown-ivl/GigaHands)** · 2025 · 2D/3D — 大规模双手活动和手物交互数据，结合连续姿态、MANO 网格与文本描述，适合姿态估计、动作生成、手部运动描述及多视角重建。
- **[Ego-Exo4D](https://ego-exo4d-data.org/)** · 2024 · 2D/3D — 同步第一与第三人称技能活动视频，EgoPose 子任务提供手部和人体关键点，适合研究真实活动中的遮挡、多视角融合与第一人称姿态估计。

- **[HOT3D](https://facebookresearch.github.io/hot3d/)** · 2024 · 3D — 头戴多视角相机捕获手物交互，面向第一人称三维跟踪。
- **[OakInk2](https://oakink.net/v2/)** · 2024 · 3D — 复杂任务中的双手物体操作，加入文本目标、动作原语和依赖图。
- **[ARCTIC](https://arctic.is.tue.mpg.de/)** · 2023 · 3D — 双手灵巧操作可动关节物体，强调同步运动与动态接触。
- **[Re:InterHand](https://mks0601.github.io/ReInterHand/)** · 2023 · 3D — 以重光照生成多样外观和视角的双手交互数据，提供时序和单帧配置。
- **[HOI4D](https://hoi4d.github.io/)** · 2022 · 3D — 真实室内第一人称 RGB-D 交互，联合手姿、物体姿态和场景理解。
- **[OakInk](https://oakink.net/)** · 2022 · 3D — 包含图像手物重建和几何抓握资源，需区分 Image 与 Shape 子集。
- **[DexYCB](https://dex-ycb.github.io/)** · 2021 · 2D/3D — 真实抓握 YCB 物体的 RGB-D 基准，覆盖手关键点、物体姿态和交接任务。
- **[H2O](https://h2odataset.ethz.ch/)** · 2021 · 3D — 双手操作物体的多视角 RGB-D 数据，包含第一人称观测。
- **[HanCo](https://lmb.informatik.uni-freiburg.de/resources/datasets/HanCo.en.html)** · 2021 · 3D — FreiHAND 的同步多视角时序扩展，用于手形估计和自监督表征。
- **[HO-3D](https://github.com/shreyashampali/ho3d)** · 2020 · 3D — 严重手物互遮挡下的手部与物体姿态基准，包含 v2/v3 不同标注版本。
- **[InterHand2.6M](https://mks0601.github.io/InterHand2.6M/)** · 2020 · 3D — 实拍单手与双手交互数据，提供相机标定、有效性标记与拟合 MANO。
- **[FreiHAND](https://lmb.informatik.uni-freiburg.de/resources/datasets/FreihandDataset.en.html)** · 2019 · 3D — 面向单张彩色图的三维手姿与形状重建，提供背景替换训练图。
- **[First-Person Hand Action Benchmark (FPHA)](https://kcvl-kaist.github.io/FPHA/)** · 2018 · 3D — 第一人称 RGB-D 动作视频，兼顾被物体遮挡的手姿估计与动作识别。
- **[BigHand2.2M](https://kcvl-kaist.github.io/bighand2.2M/)** · 2017 · 3D — 以磁传感器和逆运动学标注深度图，覆盖多种手型、视角和关节运动。
- **[Rendered Handpose Dataset (RHD)](https://lmb.informatik.uni-freiburg.de/resources/datasets/RenderedHandposeDataset.en.html)** · 2017 · 2D/3D — 合成手部图像及精确几何标注，用于单目 RGB 三维手姿学习。
- **[ICVL Hand Posture](https://labicvl.github.io/hand.html)** · 2014 · 3D — 单深度图关节定位，官方同时提供原标注及新标注。
- **[NYU Hand Pose](https://jonathantompson.github.io/NYU_Hand_Pose_Dataset.htm)** · 2014 · 2D/3D — 三视角 RGB-D 手姿基准，提供实拍与合成重建，适合深度姿态估计。

### Human

- **[CORE4D](https://core4d.github.io/)** · 2024 · 3D — 两人协作搬移物体的时序人体姿态与 6DoF 物体轨迹，含实拍与动作重定向子集。
- **[OctoNet](https://aiot-lab.github.io/OctoNet/)** · 2025 · 3D — 用于人体三维姿态、跨模态融合和活动识别的同步多传感器数据，使用专业动作捕捉提供三维监督。

- **[Ego-Exo4D](https://ego-exo4d-data.org/)** · 2024 · 2D/3D — 同步第一与第三人称技能活动视频，EgoPose 子任务提供手部和人体关键点，适合研究真实活动中的遮挡、多视角融合与第一人称姿态估计。
- **[EgoBody3M](https://github.com/facebookresearch/EgoBody3M)** · 2024 · 2D/3D — 使用 VR 头显四个单色 SLAM 相机的真实图像身体跟踪数据，用于无控制器全身估计及利用时间信息恢复视野外肢体。
- **[EgoBody](https://sanweiliti.github.io/egobody/egobody.html)** · 2022 · 3D — 同步 HoloLens2 与外部 RGB-D 相机捕捉室内社会交互，为佩戴者及交互对象提供身体姿态、形状和运动，支持第一人称场景中的人体重建。

- **[EMDB](https://eth-ait.github.io/emdb/)** · 2023 · 3D — 面向真实室内外场景的三维人体姿态与形状数据集，同时提供人体根节点及相机的全局运动轨迹。

- **[BEDLAM](https://bedlam.is.tue.mpg.de/)** · 2023 · 2D/3D — 带真实感服装、灯光和相机运动的合成人体视频，包含 SMPL-X 真值。
- **[H3WB](https://github.com/wholebody3d/wholebody3d)** · 2023 · 2D/3D — 扩展 Human3.6M 为三维全身关键点，支持 RGB 到三维与二维 lifting。
- **[UBody](https://github.com/IDEA-Research/OSX)** · 2023 · 2D/3D — 面向自然场景上半身表达的全身模型/关键点数据，支持手脸与身体联合研究。
- **[RICH](https://rich.is.tue.mpg.de/)** · 2022 · 3D — 室内外人体与场景交互，强调人体表面与场景接触。
- **[AGORA](https://agora.is.tue.mpg.de/)** · 2021 · 2D/3D — 高真实感多人合成场景，使用成人及儿童扫描拟合 SMPL-X。
- **[COCO-WholeBody](https://github.com/jin-s13/COCO-WholeBody)** · 2020 · 2D — 在 COCO 人物上补充脸、手和脚，统一全身关键点。
- **[3DPeople](https://www.albertpumarola.com/research/3DPeople/index.html)** · 2019 · 2D/3D — 穿着服装的合成人体，多人物身份与动作变化，用于人体几何学习。
- **[AMASS](https://amass.is.tue.mpg.de/)** · 2019 · 3D — 将多个光学动捕库统一为人体表面模型参数，适合运动先验与合成数据。
- **[CrowdPose](https://github.com/jeffffffli/CrowdPose)** · 2019 · 2D — 强调拥挤场景中的多人姿态估计与人物间遮挡。
- **[OCHuman](https://github.com/liruilong940607/OCHumanApi)** · 2019 · 2D — 面向严重遮挡的人体关键点和实例分割评估。
- **[3DPW](https://virtualhumans.mpi-inf.mpg.de/3DPW/)** · 2018 · 3D — 野外移动摄像机与惯性传感器结合采集，提供人体姿态和形状。
- **[MPI-INF-3DHP](https://vcai.mpi-inf.mpg.de/3dhp-dataset/)** · 2017 · 2D/3D — 多相机无标记动捕提供训练数据，并包含室内外测试场景。
- **[SURREAL](https://www.di.ens.fr/willow/research/surreal/)** · 2017 · 2D/3D — 由动捕驱动的合成人体视频，提供姿态、深度和人体部件监督。
- **[UP-3D](https://files.is.tuebingen.mpg.de/classner/up/)** · 2017 · 2D/3D — 把二维图像与经人工筛选的三维人体模型拟合联系起来。
- **[CMU Panoptic Studio](https://domedb.perception.cs.cmu.edu/)** · 2016 · 2D/3D — 大规模多视角社会互动采集，可用于多人姿态及跨视角几何研究。
- **[COCO Keypoints](https://cocodataset.org/)** · 2014 · 2D — 自然图像多人关键点基准；规模统计需区分 COCO 全集与关键点子集。
- **[Human3.6M](https://vision.imar.ro/human3.6m/description.php)** · 2014 · 2D/3D — 室内多视角同步采集的人体姿态基准，适合三维姿态与二维到三维 lifting。
- **[MPII Human Pose](https://www.mpi-inf.mpg.de/departments/computer-vision-and-machine-learning/software-and-datasets/mpii-human-pose-dataset)** · 2014 · 2D — 以日常活动分类采样的自然图像人体姿态数据，测试标注不公开。

## Contribution and provenance

Use primary project, institution or paper sources. Preserve version-specific quantities and distinguish images, frames, sequences and subjects. Do not infer commercial rights from public availability, apply paper CCF ratings to datasets, or invent star/download metrics. Interface styling is shared with Awesome-Xpose-estimation.

## Official dataset previews

Nine original image assets across five datasets are currently verified for display. The remaining records link to their official examples, rather than reproducing images without verified permission. See [image provenance and licensing](IMAGE_GUIDE.md) and [asset manifest](assets/previews/manifest.json). Images retain their own licenses, separate from original dataset terms.

### 预览类型
已核验原始示例与官网页面截图分别记录。页面截图明确标记来源与截取日期，不将其视为原始数据样例或数据集使用授权；第三方内容权利仍归原作者。无图卡片使用对应数据集名称、研究类别及维度/模态组成的索引封面，与真实图保持相同预览比例和说明栏高度，不伪装数据样例。见 [IMAGE_GUIDE.md](IMAGE_GUIDE.md)。

### 关联论文与字体
每个条目的 `papers` 数组记录已核验的 `{title, url, venue, year}`。标题与 HTTPS 链接必需；载体或年份缺失时显示待核实，不从目录年份推断。首页展示首篇并链接其余论文的详情，详情列出全部论文。论文标题与发表载体参与搜索，年度图仍统计数据集目录年份。

英文使用 Times New Roman；中文依次回退到 Source Han Sans / Noto Sans CJK / Noto Sans SC。设备未安装 Times New Roman 时由系统衬线字体回退，项目不分发商业字体文件。
