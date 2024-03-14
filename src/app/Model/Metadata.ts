import { CameraOwnerName, Software } from './Constants';
declare var require: any
import { Geolocation } from '@capacitor/geolocation';
import { Piexif } from './Piexif';
const piexif: Piexif = require('piexifjs');

export class Metadata {
  "0th": ImageIFDData = new ImageIFDData();
  "Exif": ExifIFDData = new ExifIFDData();
  "GPS": GPSIFDData = new GPSIFDData();

  "1st": any | undefined;
  "Interop": any | undefined;
  "thumbnail": any | undefined;
}

export function metadataNameToNumber(metadata: string) {
  switch (metadata) {
  case 'ProcessingSoftware':
		return 11
  case 'NewSubfileType':
		return 254
  case 'SubfileType':
		return 255
  case 'ImageWidth':
		return 256
  case 'ImageLength':
		return 257
  case 'BitsPerSample':
		return 258
  case 'Compression':
		return 259
  case 'PhotometricInterpretation':
		return 262
  case 'Threshholding':
		return 263
  case 'CellWidth':
		return 264
  case 'CellLength':
		return 265
  case 'FillOrder':
		return 266
  case 'DocumentName':
		return 269
  case 'ImageDescription':
		return 270
  case 'Make':
		return 271
  case 'Model':
		return 272
  case 'StripOffsets':
		return 273
  case 'Orientation':
		return 274
  case 'SamplesPerPixel':
		return 277
  case 'RowsPerStrip':
		return 278
  case 'StripByteCounts':
		return 279
  case 'XResolution':
		return 282
  case 'YResolution':
		return 283
  case 'PlanarConfiguration':
		return 284
  case 'GrayResponseUnit':
		return 290
  case 'GrayResponseCurve':
		return 291
  case 'T4Options':
		return 292
  case 'T6Options':
		return 293
  case 'ResolutionUnit':
		return 296
  case 'TransferFunction':
		return 301
  case 'Software':
		return 305
  case 'DateTime':
		return 306
  case 'Artist':
		return 315
  case 'HostComputer':
		return 316
  case 'Predictor':
		return 317
  case 'WhitePoint':
		return 318
  case 'PrimaryChromaticities':
		return 319
  case 'ColorMap':
		return 320
  case 'HalftoneHints':
		return 321
  case 'TileWidth':
		return 322
  case 'TileLength':
		return 323
  case 'TileOffsets':
		return 324
  case 'TileByteCounts':
		return 325
  case 'SubIFDs':
		return 330
  case 'InkSet':
		return 332
  case 'InkNames':
		return 333
  case 'NumberOfInks':
		return 334
  case 'DotRange':
		return 336
  case 'TargetPrinter':
		return 337
  case 'ExtraSamples':
		return 338
  case 'SampleFormat':
		return 339
  case 'SMinSampleValue':
		return 340
  case 'SMaxSampleValue':
		return 341
  case 'TransferRange':
		return 342
  case 'ClipPath':
		return 343
  case 'XClipPathUnits':
		return 344
  case 'YClipPathUnits':
		return 345
  case 'Indexed':
		return 346
  case 'JPEGTables':
		return 347
  case 'OPIProxy':
		return 351
  case 'JPEGProc':
		return 512
  case 'JPEGInterchangeFormat':
		return 513
  case 'JPEGInterchangeFormatLength':
		return 514
  case 'JPEGRestartInterval':
		return 515
  case 'JPEGLosslessPredictors':
		return 517
  case 'JPEGPointTransforms':
		return 518
  case 'JPEGQTables':
		return 519
  case 'JPEGDCTables':
		return 520
  case 'JPEGACTables':
		return 521
  case 'YCbCrCoefficients':
		return 529
  case 'YCbCrSubSampling':
		return 530
  case 'YCbCrPositioning':
		return 531
  case 'ReferenceBlackWhite':
		return 532
  case 'XMLPacket':
		return 700
  case 'Rating':
		return 18246
  case 'RatingPercent':
		return 18249
  case 'ImageID':
		return 32781
  case 'CFARepeatPatternDim':
		return 33421
  case 'CFAPattern':
		return 33422
  case 'BatteryLevel':
		return 33423
  case 'Copyright':
		return 33432
  case 'ExposureTime':
		return 33434
  case 'ImageResources':
		return 34377
  case 'ExifTag':
		return 34665
  case 'InterColorProfile':
		return 34675
  case 'GPSTag':
		return 34853
  case 'Interlace':
		return 34857
  case 'TimeZoneOffset':
		return 34858
  case 'SelfTimerMode':
		return 34859
  case 'FlashEnergy':
		return 37387
  case 'SpatialFrequencyResponse':
		return 37388
  case 'Noise':
		return 37389
  case 'FocalPlaneXResolution':
		return 37390
  case 'FocalPlaneYResolution':
		return 37391
  case 'FocalPlaneResolutionUnit':
		return 37392
  case 'ImageNumber':
		return 37393
  case 'SecurityClassification':
		return 37394
  case 'ImageHistory':
		return 37395
  case 'ExposureIndex':
		return 37397
  case 'TIFFEPStandardID':
		return 37398
  case 'SensingMethod':
		return 37399
  case 'XPTitle':
		return 40091
  case 'XPComment':
		return 40092
  case 'XPAuthor':
		return 40093
  case 'XPKeywords':
		return 40094
  case 'XPSubject':
		return 40095
  case 'PrintImageMatching':
		return 50341
  case 'DNGVersion':
		return 50706
  case 'DNGBackwardVersion':
		return 50707
  case 'UniqueCameraModel':
		return 50708
  case 'LocalizedCameraModel':
		return 50709
  case 'CFAPlaneColor':
		return 50710
  case 'CFALayout':
		return 50711
  case 'LinearizationTable':
		return 50712
  case 'BlackLevelRepeatDim':
		return 50713
  case 'BlackLevel':
		return 50714
  case 'BlackLevelDeltaH':
		return 50715
  case 'BlackLevelDeltaV':
		return 50716
  case 'WhiteLevel':
		return 50717
  case 'DefaultScale':
		return 50718
  case 'DefaultCropOrigin':
		return 50719
  case 'DefaultCropSize':
		return 50720
  case 'ColorMatrix1':
		return 50721
  case 'ColorMatrix2':
		return 50722
  case 'CameraCalibration1':
		return 50723
  case 'CameraCalibration2':
		return 50724
  case 'ReductionMatrix1':
		return 50725
  case 'ReductionMatrix2':
		return 50726
  case 'AnalogBalance':
		return 50727
  case 'AsShotNeutral':
		return 50728
  case 'AsShotWhiteXY':
		return 50729
  case 'BaselineExposure':
		return 50730
  case 'BaselineNoise':
		return 50731
  case 'BaselineSharpness':
		return 50732
  case 'BayerGreenSplit':
		return 50733
  case 'LinearResponseLimit':
		return 50734
  case 'CameraSerialNumber':
		return 50735
  case 'LensInfo':
		return 50736
  case 'ChromaBlurRadius':
		return 50737
  case 'AntiAliasStrength':
		return 50738
  case 'ShadowScale':
		return 50739
  case 'DNGPrivateData':
		return 50740
  case 'MakerNoteSafety':
		return 50741
  case 'CalibrationIlluminant1':
		return 50778
  case 'CalibrationIlluminant2':
		return 50779
  case 'BestQualityScale':
		return 50780
  case 'RawDataUniqueID':
		return 50781
  case 'OriginalRawFileName':
		return 50827
  case 'OriginalRawFileData':
		return 50828
  case 'ActiveArea':
		return 50829
  case 'MaskedAreas':
		return 50830
  case 'AsShotICCProfile':
		return 50831
  case 'AsShotPreProfileMatrix':
		return 50832
  case 'CurrentICCProfile':
		return 50833
  case 'CurrentPreProfileMatrix':
		return 50834
  case 'ColorimetricReference':
		return 50879
  case 'CameraCalibrationSignature':
		return 50931
  case 'ProfileCalibrationSignature':
		return 50932
  case 'AsShotProfileName':
		return 50934
  case 'NoiseReductionApplied':
		return 50935
  case 'ProfileName':
		return 50936
  case 'ProfileHueSatMapDims':
		return 50937
  case 'ProfileHueSatMapData1':
		return 50938
  case 'ProfileHueSatMapData2':
		return 50939
  case 'ProfileToneCurve':
		return 50940
  case 'ProfileEmbedPolicy':
		return 50941
  case 'ProfileCopyright':
		return 50942
  case 'ForwardMatrix1':
		return 50964
  case 'ForwardMatrix2':
		return 50965
  case 'PreviewApplicationName':
		return 50966
  case 'PreviewApplicationVersion':
		return 50967
  case 'PreviewSettingsName':
		return 50968
  case 'PreviewSettingsDigest':
		return 50969
  case 'PreviewColorSpace':
		return 50970
  case 'PreviewDateTime':
		return 50971
  case 'RawImageDigest':
		return 50972
  case 'OriginalRawFileDigest':
		return 50973
  case 'SubTileBlockSize':
		return 50974
  case 'RowInterleaveFactor':
		return 50975
  case 'ProfileLookTableDims':
		return 50981
  case 'ProfileLookTableData':
		return 50982
  case 'OpcodeList1':
		return 51008
  case 'OpcodeList2':
		return 51009
  case 'OpcodeList3':
		return 51022
  case 'NoiseProfile':
		return 51041
  case 'ExposureTime':
		return 33434
  case 'FNumber':
		return 33437
  case 'ExposureProgram':
		return 34850
  case 'SpectralSensitivity':
		return 34852
  case 'ISOSpeedRatings':
		return 34855
  case 'OECF':
		return 34856
  case 'SensitivityType':
		return 34864
  case 'StandardOutputSensitivity':
		return 34865
  case 'RecommendedExposureIndex':
		return 34866
  case 'ISOSpeed':
		return 34867
  case 'ISOSpeedLatitudeyyy':
		return 34868
  case 'ISOSpeedLatitudezzz':
		return 34869
  case 'ExifVersion':
		return 36864
  case 'DateTimeOriginal':
		return 36867
  case 'DateTimeDigitized':
		return 36868
  case 'ComponentsConfiguration':
		return 37121
  case 'CompressedBitsPerPixel':
		return 37122
  case 'ShutterSpeedValue':
		return 37377
  case 'ApertureValue':
		return 37378
  case 'BrightnessValue':
		return 37379
  case 'ExposureBiasValue':
		return 37380
  case 'MaxApertureValue':
		return 37381
  case 'SubjectDistance':
		return 37382
  case 'MeteringMode':
		return 37383
  case 'LightSource':
		return 37384
  case 'Flash':
		return 37385
  case 'FocalLength':
		return 37386
  case 'SubjectArea':
		return 37396
  case 'MakerNote':
		return 37500
  case 'UserComment':
		return 37510
  case 'SubSecTime':
		return 37520
  case 'SubSecTimeOriginal':
		return 37521
  case 'SubSecTimeDigitized':
		return 37522
  case 'FlashpixVersion':
		return 40960
  case 'ColorSpace':
		return 40961
  case 'PixelXDimension':
		return 40962
  case 'PixelYDimension':
		return 40963
  case 'RelatedSoundFile':
		return 40964
  case 'InteroperabilityTag':
		return 40965
  case 'FlashEnergy':
		return 41483
  case 'SpatialFrequencyResponse':
		return 41484
  case 'FocalPlaneXResolution':
		return 41486
  case 'FocalPlaneYResolution':
		return 41487
  case 'FocalPlaneResolutionUnit':
		return 41488
  case 'SubjectLocation':
		return 41492
  case 'ExposureIndex':
		return 41493
  case 'SensingMethod':
		return 41495
  case 'FileSource':
		return 41728
  case 'SceneType':
		return 41729
  case 'CFAPattern':
		return 41730
  case 'CustomRendered':
		return 41985
  case 'ExposureMode':
		return 41986
  case 'WhiteBalance':
		return 41987
  case 'DigitalZoomRatio':
		return 41988
  case 'FocalLengthIn35mmFilm':
		return 41989
  case 'SceneCaptureType':
		return 41990
  case 'GainControl':
		return 41991
  case 'Contrast':
		return 41992
  case 'Saturation':
		return 41993
  case 'Sharpness':
		return 41994
  case 'DeviceSettingDescription':
		return 41995
  case 'SubjectDistanceRange':
		return 41996
  case 'ImageUniqueID':
		return 42016
  case 'CameraOwnerName':
		return 42032
  case 'BodySerialNumber':
		return 42033
  case 'LensSpecification':
		return 42034
  case 'LensMake':
		return 42035
  case 'LensModel':
		return 42036
  case 'LensSerialNumber':
		return 42037
  case 'Gamma':
		return 42240
  case 'GPSVersionID':
		return 0
  case 'GPSLatitudeRef':
		return 1
  case 'GPSLatitude':
		return 2
  case 'GPSLongitudeRef':
		return 3
  case 'GPSLongitude':
		return 4
  case 'GPSAltitudeRef':
		return 5
  case 'GPSAltitude':
		return 6
  case 'GPSTimeStamp':
		return 7
  case 'GPSSatellites':
		return 8
  case 'GPSStatus':
		return 9
  case 'GPSMeasureMode':
		return 10
  case 'GPSDOP':
		return 11
  case 'GPSSpeedRef':
		return 12
  case 'GPSSpeed':
		return 13
  case 'GPSTrackRef':
		return 14
  case 'GPSTrack':
		return 15
  case 'GPSImgDirectionRef':
		return 16
  case 'GPSImgDirection':
		return 17
  case 'GPSMapDatum':
		return 18
  case 'GPSDestLatitudeRef':
		return 19
  case 'GPSDestLatitude':
		return 20
  case 'GPSDestLongitudeRef':
		return 21
  case 'GPSDestLongitude':
		return 22
  case 'GPSDestBearingRef':
		return 23
  case 'GPSDestBearing':
		return 24
  case 'GPSDestDistanceRef':
		return 25
  case 'GPSDestDistance':
		return 26
  case 'GPSProcessingMethod':
		return 27
  case 'GPSAreaInformation':
		return 28
  case 'GPSDateStamp':
		return 29
  case 'GPSDifferential':
		return 30
  case 'GPSHPositioningError':
		return 31
  }
  return -1
}

class ImageIFDData {
  [key: number]: any
  [Software]: any = "Trustworthy and secure Smartphone Photography"
}
class ExifIFDData {
  [key: number]: any
}


class GPSIFDData {
  [key: number]: any
}