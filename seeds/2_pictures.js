
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pictures').del()
    .then(function () {
      return knex('pictures').insert([{
          'id': 1,
          'image_data_uri': "data:image/jpeg;base64,/9j/4UsWRXhpZgAASUkqAAgAAAASAA4BAgAgAAAA5gAAAA8BAgAgAAAABgEAABABAgAgAAAAJgEAABIBAwABAAAAAQAAABoBBQABAAAARgEAABsBBQABAAAATgEAACgBAwABAAAAAgAAADEBAgAgAAAAVgEAADIBAgAUAAAAdgEAABMCAwABAAAAAgAAACACBAABAAAAAAAAACECBAABAAAAAAAAACICBAABAAAAAAAAACMCBAABAAAAAAAAACQCBAABAAAAAQAAACUCAgAgAAAAigEAAGmHBAABAAAAqgEAACWIBAABAAAALAMAAEUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEJMVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVklWTyA1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAQAAAEgAAAABAAAATWVkaWFUZWsgQ2FtZXJhIEFwcGxpY2F0aW9uCgAAAAAyMDE2OjExOjEyIDAwOjI1OjAzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQCaggUAAQAAANwCAACdggUAAQAAAOQCAAAiiAMAAQAAAAAAAAAniAMAAQAAAMYEAAAAkAcABAAAADAyMjADkAIAFAAAAOwCAAAEkAIAFAAAAAADAAABkQcABAAAAAECAwAEkgoAAQAAABQDAAAHkgMAAQAAAAIAAAAIkgMAAQAAAP8AAAAJkgMAAQAAAAAAAAAKkgUAAQAAABwDAACQkgIAAgAAADMwAACRkgIAAgAAADMwAACSkgIAAgAAADMwAAAAoAcABAAAADAxMDABoAMAAQAAAAEAAAACoAQAAQAAAHAQAAADoAQAAQAAAEAJAAAFoAQAAQAAALsEAAACpAMAAQAAAAAAAAADpAMAAQAAAAAAAAAEpAUAAQAAACQDAAAGpAMA...pgtxZW77zu4Zu2O1VNW1uxnDTSTOsrcZV87QOwFc0muYe5Tm1iaaRHju3BRQA46kDofY1Zt/Fbf2e0KzTMysSGU9Se9bQs2U0ZOra/eamv2a8lad8kCbHzAf3c+lUrfTPtbiDYSCcHPU1rKJhLc2LHwNdK4uleIxnIwGwy9uQajj0Frba9zJGyCUlcKOcVzyjqON2aEVomnx+Y0UcfmAne45x7Usc+kIC1tGJECY87fg7gOgpqmjezZTuLpr0FLMPCHHXdnJ+tVo73yrt5NQkZ2GBlm6n1onTsS02XbbxdPDMtukkTRMc7Wk5z3rD1fXJmkIS3C4JLEN29vWsluTysis7XVbvE9s2BJyD3rcS2l1CCC1mUyTIcMI+rH3rdaorYztT0UXN0yeX5WTiQA8imafpdra3HkuC205BxUTiHMa1u9xdaglpJagBjwWI/Crc8y6dE1hfTRJ5nOwtk1m00XGRS1jVrJztiThQBtC9B6097nS0jItl3qkW5/MbOa5qpM3dHOaxe2wUtCMbjkAc7aoW8pfUA15AxRl5I6Cs4aswdzXs9PubiCSfTtMl2bCxYr0Hr9KhudBmNv5cyMyuOWHBFejD4Q5mh2m+FrG2VRPEzoeuTyK0JtL0uNPMihURqQWUHBP0qpIak2x73NjZhp7QMgcHYp5Ipltdx3MZmWYIzclfU1zTVzaN2yzHBAbZzdyFJWP7oBc7vrXOasJ4nfzHx13Fj6fSsnBM3VyVJ5HijMAVj/FuP9aS/mlAaSN/vcFSfSnawpSZlHT3vp8efIGY8gnitK30h5Jk2zOSPlkJ6YocmyeY1tMsDbfv7e3kZEyJXB65okkgkud0sEi7RwM9amSbNIyHabDaNyFXDE7lZc5qXUbVUt2hVViTdwO+cURT5joic/LepZq8YfzG3YBbsfUUksMtzbtcbirE8DPeuyLdja4GVYYBPMNsoHXJ/CqguZEuWEhCo6/vDnkH2rnq1JdjObuf/2Q==",
          'image_name': "55091a87c39e4-0713-breville-blender-xln.jpg",
          'user_id': 1,
          'make': 'Blu',
          'camera_model_name': 'Blu Vivo 5',
          'orientation': 'Horizontal',
          'x-resolution': 72,
          'y-resolution': 72,
          'resolution_unit': "Inches",
          'software': "MediaTek Camera Application",
          'date_and_time_modified': '2016-11-12 00:25:03',
          'date_and_time_original': '2016-11-12 00:25:03',
          'date_and_time_digitized': '2016-11-12 00:25:03',
          'ycbcr_positioning': 'Co-sited',
          'exposure_time': '1/17',
          'f_number': 2.0,
          'iso_speed': 1222,
          'exif_version': 0220,
          'components_configuration': 'Y, Cb, Cr, -',
          'exposure_bias': '0 EV',
          'light_source': 'Other',
          'sub_sec_time': 30,
          'sub_sec_time_original': 30,
          'sub_sec_time_digitized': 30,
          'flashpix_version': '0100',
          'color_space': 'sRGB',
          'exposure_mode': 'Auto',
          'white_balance': 'Auto',
          'digital_zoom_ratio': 1,
          'scene_capture_type': 'Standard',
          'interop_index': 'R98 - DCF basic file (sRGB)',
          'interop_version': '0100',
          'compressed_bits_per_pixel': 1.8,
          'exposure_compensation': 1.7,
          'max_aperture_value': 3.0,
          'subject_distance': 0.75,
          'metering_mode': 'Center-weighted average',
          'flash': "off, did not fire",
          'focal_length': 3.5,
          'gps_version_id': '2.2.0.0',
          'gps_latitude_ref': 'North',
          'gps_latitude': 37.75925,
          'gps_longitude_ref': 'West',
          'gps_longitude': -122.402681,
          'gps_altitude_ref': 'Above Sea Level',
          'gps_altitude': 82,
          'gps_time_stamp': '2016-11-12 08:16:31',
          'gps_processing_method': 'GPS',
          'gps_date_stamp': '2016-11-12',
          'compression': 'JPEG (old-style)',
          'thumbnail_offset': 1280,
          'thumbnail_length': 17946,
          'original_name': '55091a87c39e4-0713-breville-blender-xln.jpg',
          'encoding': '7bit',
          'mimetype': 'image/jpeg',
          'destination': 'public/uploads',
          'path': 'public/uploads/55091a87c39e4-0713-breville-blender-xln.jpg',
          'size': 34807
        },
        {
            'id': 2,
            'image_data_uri': "data:image/jpeg;base64,/9j/4UsWRXhpZgAASUkqAAgAAAASAA4BAgAgAAAA5gAAAA8BAgAgAAAABgEAABABAgAgAAAAJgEAABIBAwABAAAAAQAAABoBBQABAAAARgEAABsBBQABAAAATgEAACgBAwABAAAAAgAAADEBAgAgAAAAVgEAADIBAgAUAAAAdgEAABMCAwABAAAAAgAAACACBAABAAAAAAAAACECBAABAAAAAAAAACICBAABAAAAAAAAACMCBAABAAAAAAAAACQCBAABAAAAAQAAACUCAgAgAAAAigEAAGmHBAABAAAAqgEAACWIBAABAAAALAMAAEUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEJMVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVklWTyA1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAAAQAAAEgAAAABAAAATWVkaWFUZWsgQ2FtZXJhIEFwcGxpY2F0aW9uCgAAAAAyMDE2OjExOjEyIDAwOjI1OjAzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQCaggUAAQAAANwCAACdggUAAQAAAOQCAAAiiAMAAQAAAAAAAAAniAMAAQAAAMYEAAAAkAcABAAAADAyMjADkAIAFAAAAOwCAAAEkAIAFAAAAAADAAABkQcABAAAAAECAwAEkgoAAQAAABQDAAAHkgMAAQAAAAIAAAAIkgMAAQAAAP8AAAAJkgMAAQAAAAAAAAAKkgUAAQAAABwDAACQkgIAAgAAADMwAACRkgIAAgAAADMwAACSkgIAAgAAADMwAAAAoAcABAAAADAxMDABoAMAAQAAAAEAAAACoAQAAQAAAHAQAAADoAQAAQAAAEAJAAAFoAQAAQAAALsEAAACpAMAAQAAAAAAAAADpAMAAQAAAAAAAAAEpAUAAQAAACQDAAAGpAMA...pgtxZW77zu4Zu2O1VNW1uxnDTSTOsrcZV87QOwFc0muYe5Tm1iaaRHju3BRQA46kDofY1Zt/Fbf2e0KzTMysSGU9Se9bQs2U0ZOra/eamv2a8lad8kCbHzAf3c+lUrfTPtbiDYSCcHPU1rKJhLc2LHwNdK4uleIxnIwGwy9uQajj0Frba9zJGyCUlcKOcVzyjqON2aEVomnx+Y0UcfmAne45x7Usc+kIC1tGJECY87fg7gOgpqmjezZTuLpr0FLMPCHHXdnJ+tVo73yrt5NQkZ2GBlm6n1onTsS02XbbxdPDMtukkTRMc7Wk5z3rD1fXJmkIS3C4JLEN29vWsluTysis7XVbvE9s2BJyD3rcS2l1CCC1mUyTIcMI+rH3rdaorYztT0UXN0yeX5WTiQA8imafpdra3HkuC205BxUTiHMa1u9xdaglpJagBjwWI/Crc8y6dE1hfTRJ5nOwtk1m00XGRS1jVrJztiThQBtC9B6097nS0jItl3qkW5/MbOa5qpM3dHOaxe2wUtCMbjkAc7aoW8pfUA15AxRl5I6Cs4aswdzXs9PubiCSfTtMl2bCxYr0Hr9KhudBmNv5cyMyuOWHBFejD4Q5mh2m+FrG2VRPEzoeuTyK0JtL0uNPMihURqQWUHBP0qpIak2x73NjZhp7QMgcHYp5Ipltdx3MZmWYIzclfU1zTVzaN2yzHBAbZzdyFJWP7oBc7vrXOasJ4nfzHx13Fj6fSsnBM3VyVJ5HijMAVj/FuP9aS/mlAaSN/vcFSfSnawpSZlHT3vp8efIGY8gnitK30h5Jk2zOSPlkJ6YocmyeY1tMsDbfv7e3kZEyJXB65okkgkud0sEi7RwM9amSbNIyHabDaNyFXDE7lZc5qXUbVUt2hVViTdwO+cURT5joic/LepZq8YfzG3YBbsfUUksMtzbtcbirE8DPeuyLdja4GVYYBPMNsoHXJ/CqguZEuWEhCo6/vDnkH2rnq1JdjObuf/2Q==",
            'image_name': "30894199336_11a17e43c4_o.jpg",
            'user_id': 1,
            'make': 'Blu',
            'camera_model_name': 'Blu Vivo 5',
            'orientation': 'Horizontal',
            'x-resolution': 72,
            'y-resolution': 72,
            'resolution_unit': "Inches",
            'software': "MediaTek Camera Application",
            'date_and_time_modified': '2016-11-12 00:25:03',
            'date_and_time_original': '2016-11-12 00:25:03',
            'date_and_time_digitized': '2016-11-12 00:25:03',
            'ycbcr_positioning': 'Co-sited',
            'exposure_time': '1/10',
            'f_number': 2.0,
            'iso_speed': 1964,
            'exif_version': 0220,
            'components_configuration': 'Y, Cb, Cr, -',
            'exposure_bias': '0 EV',
            'light_source': 'Other',
            'sub_sec_time': 30,
            'sub_sec_time_original': 30,
            'sub_sec_time_digitized': 30,
            'flashpix_version': '0100',
            'color_space': 'sRGB',
            'exposure_mode': 'Auto',
            'white_balance': 'Auto',
            'digital_zoom_ratio': 1,
            'scene_capture_type': 'Standard',
            'interop_index': 'R98 - DCF basic file (sRGB)',
            'interop_version': '0100',
            'compressed_bits_per_pixel': 1.8,
            'exposure_compensation': 1.7,
            'max_aperture_value': 3.0,
            'subject_distance': 0.75,
            'metering_mode': 'Center-weighted average',
            'flash': "off, did not fire",
            'focal_length': 3.5,
            'gps_version_id': '2.2.0.0',
            'gps_latitude_ref': 'North',
            'gps_latitude': 37.75925,
            'gps_longitude_ref': 'West',
            'gps_longitude': -122.402681,
            'gps_altitude_ref': 'Above Sea Level',
            'gps_altitude': 82,
            'gps_time_stamp': '2016-11-12 08:16:31',
            'gps_processing_method': 'GPS',
            'gps_date_stamp': '2016-11-12',
            'compression': 'JPEG (old-style)',
            'thumbnail_offset': 1280,
            'thumbnail_length': 17946,
            'original_name': '30894199336_11a17e43c4_o.jpg',
            'encoding': '7bit',
            'mimetype': 'image/jpeg',
            'destination': 'public/uploads',
            'path': 'public/uploads/30894199336_11a17e43c4_o.jpg',
            'size': 34807
          }
      ]);
    }); //then
}  //End of main function
