function getMap() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {credentials: 'Ah0k8PKqcZTJsD12xoHSVy1kc-boQ53Vpj_zOlTiJup1yXMfVEmaXevdWEsCTqke'});
    var locations = [];

    $.ajax({
        type: "GET",
        url: "/../gpx/first.gpx",
        dataType: "xml",
        success: function (xml) {
            var points = [];

            $(xml).find("trkpt").each(function () {
                var lat = $(this).attr("lat");
                var lon = $(this).attr("lon");
                var p = new Microsoft.Maps.Location(lat, lon);
                locations.push(p);
            });

            var polyline = new Microsoft.Maps.Polyline(locations, null);

            map.setView({ bounds: Microsoft.Maps.LocationRect.fromLocations(locations)});

            map.setView({bounds: Microsoft.Maps.Loca});
            map.entities.push(polyline);

        }
    });
}