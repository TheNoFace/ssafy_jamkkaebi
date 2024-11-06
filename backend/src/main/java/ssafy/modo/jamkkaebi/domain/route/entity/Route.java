package ssafy.modo.jamkkaebi.domain.route.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import ssafy.modo.jamkkaebi.domain.route.dto.GeoJsonDto;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@Document(collection = "cargo_routes")
public class Route {

    @Id
    private String id;

    @Field("cargo_id")
    private long cargoId;

    @CreatedDate
    @Field("created_date")
    private LocalDateTime createdDate;

    @Field("route_info")
    private GeoJsonDto routeInfo;

    @Builder
    public Route(long cargoId, GeoJsonDto routeInfo) {
        this.cargoId = cargoId;
        this.routeInfo = routeInfo;
    }
}
