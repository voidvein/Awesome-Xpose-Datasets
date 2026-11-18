# Dataset example images

Use `images` on an individual dataset record. This is optional. Do not substitute generated or unrelated stock imagery for dataset samples.

```json
{
  "images": [{
    "src": "assets/previews/dataset-id.webp",
    "source": "https://official.example/dataset",
    "alt": "Concrete description of the actual dataset sample and annotations",
    "caption": "Official sample with keypoint annotations",
    "attribution": "Dataset authors / institution",
    "license": "Exact image reuse license or specific permission",
    "license_url": "https://official.example/terms",
    "verified_at": "YYYY-MM-DD"
  }]
}
```

`src` may be a local image (PNG, JPEG, WebP, AVIF or GIF) under `assets/previews/`, or an HTTPS asset whose display is authorized. Do not download, embed or claim permission based merely on public availability. Verify that a license applies to the image, rather than just code or a webpage template. Source, alt text, attribution, license and verified date are mandatory for rendering.

The first eligible image appears on the homepage card, with a source link. All eligible images appear on the detail page with provenance and license. Images use `contain`, preserving the entire original sample and its annotation context. No crops or misleading reconstructions are generated. Missing/unverified assets show an explicit text-only state. Failed image loads retain a readable fallback and source link.

Run `node --check app.js && node scripts/test.cjs` after integrating assets. The tests validate schema and file existence; visual inspection and source/license verification are still required.

## Initial verified batch

Nine original assets across five datasets: NYU Hand Pose (one), InterHand2.6M (two), Re:InterHand (one ego-view animation) FaceSynthetics (four original paper panels/examples) and EMDB (one official project teaser). The larger third-person Re:InterHand animation is not bundled. `assets/previews/manifest.json` records source pages, permission evidence, original file checksums and modifications.

Third-party images retain their own licenses and are excluded from any repository code license. CC BY-NC images are non-commercial; FaceSynthetics paper images retain CC BY-NC-SA 4.0, including ShareAlike requirements for adaptations. No edits were made to these assets. Do not confuse paper-image licenses with data-access agreements. Missing datasets retain official example links instead of unauthorized copies.

EMDB’s teaser retains the project website CC BY-SA 4.0 license. This does not authorize redistribution of EMDB’s original dataset, whose separate terms require application and non-commercial academic use.

## 官网页面截图（与数据样例分开）

用户授权截取公开官方项目页用于目录预览。`images[]` 可使用 `kind: "page-screenshot"`，必须有 `src`、`source`（实际页面 URL）、`alt`、`attribution`、`captured_at` 与 `rights_note`。不以截图代替数据集授权证据，不为网页截图填入未经证实的开放许可证。

截图显示「官网页面截图」标签。`rights_note` 明确页面及其中第三方内容仍归原权利人，截图仅用于目录介绍，不代表数据许可或再使用授权。卡片使用顶部对齐 cover，详情完整显示，保留来源链接和拍摄日期。原有 `dataset-sample` 图仍必须具备来源、署名、许可证与核验日期。

无图与加载失败条目使用对应数据集名称、类别和维度/模态组成的索引封面，保持与有图项相同的 16:10 预览比例和说明栏高度；手机单列布局采用相同比例。

本轮另收录 11 张官网页面截图：BEDLAM、AGORA、RICH、AMASS、3DPW、DexYCB、HOI4D、OakInk、OakInk2、H2O、ARCTIC。合计 20 个预览文件覆盖 16 个数据集。网页截图保留页面上下文，JPEG 编码；不声称拥有原始样本的再分发许可。AGORA 已使用无 cookie 弹窗版本。
