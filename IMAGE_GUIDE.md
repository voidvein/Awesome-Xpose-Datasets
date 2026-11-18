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
