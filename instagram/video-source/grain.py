import numpy as np
from PIL import Image, ImageFilter
def grain(im,s=7,seed=0):
    rng=np.random.default_rng(seed); a=np.asarray(im).astype(np.float32)
    n=rng.normal(0,s,(a.shape[0],a.shape[1])).astype(np.float32)
    n=np.asarray(Image.fromarray(np.clip(n*8+128,0,255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.55))).astype(np.float32)
    n=(n-128)/8*1.35
    return Image.fromarray(np.clip(a+n[...,None],0,255).astype(np.uint8))
