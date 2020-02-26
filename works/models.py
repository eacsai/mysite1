from django.db import models


class ImageType(models.Model):
    type_name = models.CharField(max_length=15)

    def __str__(self):
        return self.type_name




class Image(models.Model):
    img = models.ImageField(upload_to='works/%Y%m%d/')    # 图片文件,上传至img文件夹
    description = models.TextField()            # 图片描述, 长文本类型
    img_type = models.ForeignKey(ImageType, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)  # 创建时间,自动添加当前时间